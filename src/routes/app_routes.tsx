import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import LoginPage from "../login/user_login";
import RouteLayout from "../layout/app_layout";
import VendorTable from "../pages/vendor_directory/venders";
import ProtectedRoute from "../routes/protectted_routes";
import Unauthorized from "../pages/Unauthorized";
import { USER_ROLE } from "../app_constants/common_constants";
import Dashboard from "../pages/Dashboard/dashboard";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Route */}
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
        <Route index element={<Dashboard />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="vendor-directory" element={<VendorTable />} />

        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>
    </>,
  ),
);

export default AppRoutes;
