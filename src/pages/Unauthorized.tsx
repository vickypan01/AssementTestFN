import { ShieldAlert, ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-white to-blue-100 px-6">
      <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-2xl">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <ShieldAlert className="h-12 w-12 text-red-600" />
        </div>

        {/* Error Code */}
        <h1 className="mt-8 text-7xl font-extrabold text-red-600">403</h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">Access Denied</h2>

        {/* Description */}
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Sorry, you don't have permission to access this page.
          <br />
          Please contact your administrator if you believe this is a mistake.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

          <button
            onClick={() => navigate("/app")}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <Home size={20} />
            Dashboard
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t pt-6 text-sm text-gray-500">
          Error Code: <span className="font-semibold">403 Forbidden</span>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
