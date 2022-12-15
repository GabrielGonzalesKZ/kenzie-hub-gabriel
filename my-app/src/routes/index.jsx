import { Route, Routes, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "../Components/ProtectedRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
