import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex-col flex-center mt-16">
            <h2 className="title fw-600">
                Cette page n'est malheureusement pas disponible.
            </h2>
            <p className="mt-32">
                Le lien que vous avez suivi est peut-être rompu, ou la page a
                été supprimée. <Link to={"/"}>Revenir à Fakegram.</Link>
            </p>
        </div>
    );
};

export default NotFound;
