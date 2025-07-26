interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

export function StatCard({ value, label, icon, iconBgColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center">
        <div className={`w-12 h-12 rounded-lg ${iconBgColor} flex items-center justify-center text-white mr-4`}>
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
    </div>
  );
}
