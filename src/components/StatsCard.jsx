export default function StatsCard({ title, value, color = "text-[#d9579a]" }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl shadow-lg p-6 backdrop-blur-sm">
      <h3 className="text-sm text-gray-400 font-medium">{title}</h3>
      <p className={`text-4xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}
