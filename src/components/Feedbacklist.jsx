import { useEffect, useState } from "react";
import api from "../api/api";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/feedback")
      .then((res) => {
        setFeedbacks(res.data.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400">Loading feedback...</p>;
  }

  return (
    <div className="bg-[#1a1b2e] rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">User Feedback</h2>

      {feedbacks.length === 0 && (
        <p className="text-gray-400 text-center py-4">No feedback available</p>
      )}

      <div className="space-y-4">
        {feedbacks.map((f) => (
          <div
            key={f._id}
            className="border border-gray-700 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold text-white">{f.title}</h3>
              <span className="text-sm text-yellow-400">
                ⭐ {f.rating}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              {f.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
