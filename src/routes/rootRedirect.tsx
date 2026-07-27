import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxhooks";

const RootRedirect = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/app" replace />;
  }

  return <Navigate to="/login" replace />;
};

export default RootRedirect;
