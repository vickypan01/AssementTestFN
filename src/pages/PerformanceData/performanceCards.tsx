import {
  BadgeCheck,
  Clock3,
  ShieldAlert,
  Star,
  Truck,
  Wallet,
} from "lucide-react";
import { useAppSelector } from "../../hooks/reduxhooks";

const iconMap = {
  "Quality Score": BadgeCheck,
  "Delivery Score": Truck,
  "Response Time": Clock3,
  "Payment History": Wallet,
  "Risk Score": ShieldAlert,
  "Vendor Rating": Star,
};

const colorMap = {
  green: "bg-green-100 text-green-600",
  blue: "bg-blue-100 text-blue-600",
  yellow: "bg-yellow-100 text-yellow-600",
  red: "bg-red-100 text-red-600",
};

const PerformanceCards = () => {
  const metrics = useAppSelector((state) => state.performance.metrics);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {metrics.map((metric) => {
        const Icon =
          iconMap[metric.title as keyof typeof iconMap] ?? BadgeCheck;

        const colors =
          colorMap[metric.color as keyof typeof colorMap] ??
          "bg-gray-100 text-gray-600";

        return (
          <div
            key={metric.title}
            className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">{metric.title}</p>

                <h2 className="mt-2 text-3xl font-bold">{metric.value}</h2>

                <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm">
                  {metric.status}
                </span>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${colors}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PerformanceCards;
