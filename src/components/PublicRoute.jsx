import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const PublicRoute = ({ children }) => {
    const { loading, user } = useSelector((state) => state.auth);

    return loading ? (
        <LoadingSpinner />
    ) : user ? (
        <Navigate to={"/"} />
    ) : (
        children
    );
};

export default PublicRoute;
