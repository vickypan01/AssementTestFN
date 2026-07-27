import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootRedirect from "../routes/rootRedirect";
import LoginPage from "../login/user_login";
import RouteLayout from "../layout/app_layout";
import ProtectedRoute from "../routes/protectted_routes";
import Unauthorized from "../pages/Unauthorized";

import { USER_ROLE } from "../app_constants/common_constants";

import KPICard from "../pages/KPI/kpidata";
import VendorTable from "../pages/vendor_directory/venders";
import VendorDetails from "../pages/vendor_directory/vendorDetails";
import CreateVendor from "../pages/vendor_directory/createVendor";
import Performance from "../pages/PerformanceData/performancePage";
import ApprovalWorkflow from "../pages/workflow/approvalWorkflow";
import Charts from "../pages/Dashboard/charts";
import StartPage from "../pages/startPage";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootRedirect />} />

      <Route path="/login" element={<LoginPage />} />

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
        <Route index element={<StartPage />} />

        <Route path="charts" element={<Charts />} />

        <Route path="kpicard" element={<KPICard />} />

        <Route path="vendor-directory" element={<VendorTable />} />

        <Route path="create-vendor" element={<CreateVendor />} />

        <Route path="vendors/:vendorId" element={<VendorDetails />} />

        <Route path="performance" element={<Performance />} />

        <Route path="approval-workflow" element={<ApprovalWorkflow />} />

        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>
    </>,
  ),
);

export default AppRoutes;
