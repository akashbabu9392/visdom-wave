interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

export function StatCard({ value, label, icon, iconBgColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
      <div className={`w-14 h-14 rounded-xl ${iconBgColor} flex items-center justify-center text-white mb-4 shadow-md`}>{icon}</div>
      <p className="text-3xl font-extrabold text-gray-900 mb-1">{value}</p>
      <p className="text-base font-medium text-gray-500">{label}</p>
    </div>
  );
}
