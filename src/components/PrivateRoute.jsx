import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useSelector((state) => state.auth);

    return loading ? (
        <LoadingSpinner />
    ) : user ? (
        children
    ) : (
        <Navigate to={"/login"} />
    );
};

export default PrivateRoute;
