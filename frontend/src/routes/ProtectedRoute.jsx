import { Navigate, useLocation } from "react-router-dom";
import { getAuthUser } from "../services/api";

export default function ProtectedRoute({ children, roles }) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const user = getAuthUser();

  if (!token || !user) return <Navigate to="/student-login" replace state={{ from: location }} />;
  if (roles?.length && !roles.includes(user.role)) return <Navigate to="/unauthorized" replace />;
  return children;
}
