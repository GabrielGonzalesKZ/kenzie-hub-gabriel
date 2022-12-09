import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = ({ userLogin, user }) => {
    return (
        <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login userLogin={userLogin} />} />
            <Route path="/home" element={<Home user={user} />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    )
}