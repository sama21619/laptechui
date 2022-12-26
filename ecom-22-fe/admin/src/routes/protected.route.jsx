import React from "react";
import { Navigate, Route, Outlet, useNavigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    let location = useLocation();

   

    return children;
};
