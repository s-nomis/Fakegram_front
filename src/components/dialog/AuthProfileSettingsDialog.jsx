import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";

import DialogComponent from "./DialogComponent";

const AuthProfileSettingsDialog = ({ displayDialog }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <DialogComponent displayDialog={displayDialog}>
            <div
                className="sm-container dialog-container"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="btn btn-dialog btn-large"
                    onClick={() => navigate("/account/password/change")}
                >
                    Changer de mot de passe
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    Code QR
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    Apps et sites web
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    Notifications
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    Confidentialité et sécurité
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    Activité de connexion
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    E-mails de Fakegram
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    Signaler un problème
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    Intégrer
                </button>
                <hr />

                <button
                    className="btn btn-dialog btn-large"
                    onClick={handleLogout}
                >
                    Déconnexion
                </button>
                <hr />

                <button
                    className="btn btn-dialog btn-large"
                    onClick={() => displayDialog(false)}
                >
                    Annuler
                </button>
            </div>
        </DialogComponent>
    );
};

export default AuthProfileSettingsDialog;
