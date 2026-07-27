import {
  Building2,
  ChartLine,
  FileText,
  ShieldCheck,
  ShoppingCart,
  Users,
  ClipboardCheck,
  AlertTriangle,
  CreditCard,
  FolderKanban,
  PlusCircle,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const modules = [
  {
    title: "Vendor Directory",
    description: "View, search and manage all registered vendors.",
    icon: Users,
    route: "/app/vendor-directory",
    color: "bg-blue-100 text-blue-600",
  },

  {
    title: "Create Vendor",
    description:
      "Register new vendors with GST, PAN, bank and document details.",
    icon: PlusCircle,
    route: "/app/create-vendor",
    color: "bg-green-100 text-green-600",
  },

  {
    title: "Vendor Performance",
    description: "Analyze delivery, quality, compliance and vendor ratings.",
    icon: ChartLine,
    route: "/app/performance",
    color: "bg-purple-100 text-purple-600",
  },

  {
    title: "Approval Workflow",
    description: "Approve, reject or request vendor changes.",
    icon: ClipboardCheck,
    route: "/app/approval-workflow",
    color: "bg-yellow-100 text-yellow-600",
  },

  {
    title: "Analytics & Charts",
    description: "Track vendor trends, categories and purchase analytics.",
    icon: Building2,
    route: "/app/charts",
    color: "bg-indigo-100 text-indigo-600",
  },

  {
    title: "Purchase History",
    description: "Monitor vendor purchases and active purchase orders.",
    icon: ShoppingCart,
    route: "/app/vendor-directory",
    color: "bg-orange-100 text-orange-600",
  },

  {
    title: "Documents",
    description: "Manage certificates, contracts and compliance documents.",
    icon: FileText,
    route: "/app/vendor-directory",
    color: "bg-red-100 text-red-600",
  },

  {
    title: "Payments",
    description: "Track payment terms and vendor payment status.",
    icon: CreditCard,
    route: "/app/vendor-directory",
    color: "bg-teal-100 text-teal-600",
  },

  {
    title: "Projects Associated",
    description: "View projects linked with vendors.",
    icon: FolderKanban,
    route: "/app/vendor-directory",
    color: "bg-pink-100 text-pink-600",
  },

  {
    title: "Issues & Audit",
    description: "Track vendor issues and audit history.",
    icon: AlertTriangle,
    route: "/app/vendor-directory",
    color: "bg-gray-100 text-gray-600",
  },
];

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}

      <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Smart Vendor Management Portal</h1>

        <p className="mt-3 max-w-3xl text-blue-100">
          Manage vendors, approvals, performance, purchase lifecycle and
          compliance from a single intelligent platform.
        </p>
      </div>

      {/* Quick Stats */}

      <div className="mb-8 grid gap-5 md:grid-cols-4">
        <StatCard title="Total Vendors" value="248" icon={<Users />} />

        <StatCard
          title="Pending Approval"
          value="18"
          icon={<ClipboardCheck />}
        />

        <StatCard title="Active Orders" value="64" icon={<ShoppingCart />} />

        <StatCard title="Risk Alerts" value="7" icon={<ShieldCheck />} />
      </div>

      {/* Modules */}

      <h2 className="mb-5 text-2xl font-bold text-gray-800">
        Application Modules
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon;

          return (
            <div
              key={module.title}
              className="
              cursor-pointer
              rounded-xl
              bg-white
              p-6
              shadow-sm
              transition
              hover:-translate-y-1
              hover:shadow-xl
              "
              onClick={() => navigate(module.route)}
            >
              <div
                className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                ${module.color}
                `}
              >
                <Icon size={28} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">{module.title}</h3>

              <p className="mt-2 text-sm text-gray-500">{module.description}</p>

              <button
                className="
                mt-5
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-blue-600
                "
              >
                Open Module
                <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className="
rounded-xl
bg-white
p-5
shadow-sm
"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div
          className="
rounded-full
bg-blue-100
p-3
text-blue-600
"
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
