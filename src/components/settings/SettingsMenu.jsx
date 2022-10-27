import React from "react";
import { Link } from "react-router-dom";

const SettingsMenu = ({ active }) => {
    return (
        <div className="flex-col">
            <Link
                className={
                    "settings-menu-item" +
                    (active === 1 ? " active" : " inactive")
                }
                to={"/account/edit"}
            >
                Modifier profil
            </Link>
            <Link
                className={
                    "settings-menu-item" +
                    (active === 2 ? " active" : " inactive")
                }
                to={"/account/password/change"}
            >
                Changer de mot de passe
            </Link>
            <p
                className={
                    "settings-menu-item disabled" +
                    (active === 3 ? " active" : " inactive")
                }
            >
                Apps et sites web
            </p>
            <p
                className={
                    "settings-menu-item disabled" +
                    (active === 4 ? " active" : " inactive")
                }
            >
                E-mail ou texto
            </p>
            <p
                className={
                    "settings-menu-item disabled" +
                    (active === 5 ? " active" : " inactive")
                }
            >
                Notifications push
            </p>
            <p
                className={
                    "settings-menu-item disabled" +
                    (active === 6 ? " active" : " inactive")
                }
            >
                Gérer les contacts
            </p>
            <p
                className={
                    "settings-menu-item disabled" +
                    (active === 7 ? " active" : " inactive")
                }
            >
                Sécurité et confidentialité
            </p>
            <p
                className={
                    "settings-menu-item disabled" +
                    (active === 8 ? " active" : " inactive")
                }
            >
                Activité de connexion
            </p>
            <p
                className={
                    "settings-menu-item disabled" +
                    (active === 9 ? " active" : " inactive")
                }
            >
                E-mails de Fakegram
            </p>
            <p
                className={
                    "settings-menu-item disabled" +
                    (active === 10 ? " active" : " inactive")
                }
            >
                Aide
            </p>
        </div>
    );
};

export default SettingsMenu;
