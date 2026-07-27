import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import RouteLayout from "../layout/app_layout";
import VendorTable from "../pages/vendor_directory/venders";
import ProtectedRoute from "../routes/protectted_routes";
import Unauthorized from "../pages/Unauthorized";
import { USER_ROLE } from "../app_constants/common_constants";
import Dashboard from "../pages/Dashboard/dashboard";
import VendorDetails from "../pages/vendor_directory/vendorDetails";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to="/app/dashboard" replace />} />

      {/* Protected Application Routes */}
      <Route
        path="/app"
        element={
          <ProtectedRoute
            element={<RouteLayout />}
            allowedRoles={[
              USER_ROLE.ADMIN,
              USER_ROLE.MANAGER,
              USER_ROLE.EMPLOYEE,
              USER_ROLE.HR,
            ]}
          />
        }
      >
        {/* Default /app route */}
        <Route index element={<Dashboard />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="vendor-directory" element={<VendorTable />} />

        <Route path="vendors/:vendorId" element={<VendorDetails />} />

        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>
    </>,
  ),
);

export default AppRoutes;
