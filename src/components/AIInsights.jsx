import { useState, useEffect } from "react";
import api from "../api/api";

export default function AIInsights() {
  const [fullInsight, setFullInsight] = useState("");
  const [displayedInsight, setDisplayedInsight] = useState("");
  const [loading, setLoading] = useState(false);

  const generateInsights = async () => {
    setLoading(true);
    setDisplayedInsight(""); // Clear previous insight before generating a new one
    try {
      const res = await api.post("/ai/insights");
      // Store the full response but don't display it yet
      setFullInsight(res.data.insight);
    } catch (error) {
      alert("Failed to generate AI insights");
    } finally {
      setLoading(false);
    }
  };

  // Effect for the typewriter animation
  useEffect(() => {
    if (loading || !fullInsight) return;

    // Animate the text display
    const interval = setInterval(() => {
      setDisplayedInsight((prev) => {
        if (prev.length < fullInsight.length) {
          return fullInsight.substring(0, prev.length + 1);
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 20); // Adjust speed of typing here (milliseconds)

    return () => clearInterval(interval);
  }, [fullInsight, loading]);

  return (
    <div className="bg-[#1a1b2e] rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">AI Insights</h2>
        <button
          onClick={generateInsights}
          disabled={loading}
          className="bg-[#d9579a] text-white font-semibold py-2 px-5 rounded-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a1b2e] focus:ring-[#d9579a] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {(loading || displayedInsight) && (
        <pre className="mt-4 bg-[#131424] p-4 rounded-lg text-sm whitespace-pre-wrap font-mono text-gray-300">
          {displayedInsight}
          {/* Blinking cursor effect */}
          {loading && !displayedInsight && <span className="animate-pulse">▋</span>}
          {displayedInsight.length < fullInsight.length && <span className="animate-pulse">▋</span>}
        </pre>
      )}

      {!loading && !fullInsight && (
        <div className="text-center text-gray-500 py-8">Click "Generate" to see AI insights.</div>
      )}
    </div>
  );
}
