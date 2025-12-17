import { useEffect, useState } from "react";
import { NavLink, Outlet, useOutletContext, useNavigate, useLocation } from "react-router-dom";
import api from "../api/api"; // axios instance
import StatsCard from "../components/StatsCard";
import FeedbackList from "../components/Feedbacklist";
import AIInsights from "../components/AIInsights";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalFeedback: 0,
    positive: 0,
    neutral: 0,
    negative: 0,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close sidebar on navigation
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/stats");
        setStats(res.data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };

    fetchStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="relative h-screen bg-[#131424] text-gray-300 flex font-['Inter'] overflow-hidden">
      
      {/* Sidebar */}
      <aside className={`w-60 bg-[#1a1b2e] p-6 flex flex-col z-20 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed md:relative md:translate-x-0 h-full`}>

        <div className="flex-grow">
          <h2 className="text-2xl font-bold text-white mb-12">
            Clueso.io
          </h2>
          <nav className="space-y-2">
            <NavLink to="/dashboard" end className={({ isActive }) => `block px-4 py-2.5 rounded-lg transition-colors duration-200 ${isActive ? 'bg-[#d9579a] text-white' : 'hover:bg-gray-700/50'}`}>Dashboard</NavLink>
            <NavLink to="/dashboard/feedback" className={({ isActive }) => `block px-4 py-2.5 rounded-lg transition-colors duration-200 ${isActive ? 'bg-[#d9579a] text-white' : 'hover:bg-gray-700/50'}`}>Feedback</NavLink>
            <NavLink to="/dashboard/insights" className={({ isActive }) => `block px-4 py-2.5 rounded-lg transition-colors duration-200 ${isActive ? 'bg-[#d9579a] text-white' : 'hover:bg-gray-700/50'}`}>Insights</NavLink>
          </nav>
        </div>
        <div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-red-800/50 hover:text-white transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 bg-[#131424] flex justify-between items-center p-4 z-10 h-16">
          <h2 className="text-2xl font-bold text-white">Clueso</h2>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white z-30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <main className="p-6 md:p-8">
          <Outlet context={{ stats }} />
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-10 md:hidden"></div>
      )}
    </div>
  );
}

export function DashboardIndex() {
  const { stats } = useOutletContext();
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6 hidden md:block">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Feedback" value={stats.totalFeedback} />
        <StatsCard title="Positive" value={stats.positive} color="text-green-400" />
        <StatsCard title="Neutral" value={stats.neutral} color="text-yellow-400" />
        <StatsCard title="Negative" value={stats.negative} color="text-red-400" />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <FeedbackList />
        <AIInsights />
      </div>
    </>
  );
}
