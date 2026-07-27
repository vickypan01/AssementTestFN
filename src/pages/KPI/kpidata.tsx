import {
  Building2,
  CheckCircle2,
  Ban,
  Clock3,
  Star,
  ShoppingCart,
} from "lucide-react";

const KPICard = () => {
  const kpiData = [
    {
      title: "Total Vendors",
      value: 248,
      icon: Building2,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Active Vendors",
      value: 212,
      icon: CheckCircle2,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Blacklisted Vendors",
      value: 8,
      icon: Ban,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Pending Approvals",
      value: 14,
      icon: Clock3,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Average Vendor Rating",
      value: "4.8 ★",
      icon: Star,
      bgColor: "bg-amber-100",
      iconColor: "text-amber-500",
    },
    {
      title: "Active Purchase Orders",
      value: 67,
      icon: ShoppingCart,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {kpiData.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                  {item.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${item.bgColor}`}
              >
                <Icon className={`h-7 w-7 ${item.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPICard;
