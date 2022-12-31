import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ContextAPI } from "../../Context/TechContext/ContextAPI";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(ContextAPI);
  const location = useLocation();

  if (loading) {
    return null;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
