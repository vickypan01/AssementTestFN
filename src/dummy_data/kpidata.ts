import {
  Building2,
  CheckCircle2,
  Ban,
  Clock3,
  Star,
  ShoppingCart,
} from "lucide-react";

export const kpiData = [
  {
    id: 1,
    title: "Total Vendors",
    value: 248,
    icon: Building2,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Active Vendors",
    value: 212,
    icon: CheckCircle2,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    title: "Blacklisted Vendors",
    value: 8,
    icon: Ban,
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    id: 4,
    title: "Pending Approvals",
    value: 14,
    icon: Clock3,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: 5,
    title: "Average Vendor Rating",
    value: "4.7 / 5",
    icon: Star,
    color: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    id: 6,
    title: "Active Purchase Orders",
    value: 67,
    icon: ShoppingCart,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];
