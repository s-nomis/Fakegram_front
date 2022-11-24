import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import AuthProfileSettingsDialog from "../dialog/AuthProfileSettingsDialog";

import settings from "../../assets/icons/setting.png";

const AuthProfil = ({ user }) => {
    const navigate = useNavigate();

    const [settingsDialog, setSettingsDialog] = useState(false);

    return (
        <div className="flex-row g-100 pr-70 pl-70">
            <Avatar avatar={user.avatar}>
                <img
                    src={user.avatar}
                    alt=""
                    className="avatar profile-avatar"
                />
            </Avatar>

            <div className="flex-col g-20">
                <div className="flex-row flex-align-center g-15">
                    <h2 className="profile-title">{user.username}</h2>
                    <button
                        className="btn btn-secondary btn-small fw-600"
                        onClick={() => navigate("/account/edit")}
                    >
                        Modifier profil
                    </button>
                    <div
                        className="icon m-10"
                        onClick={() => setSettingsDialog(true)}
                    >
                        <img src={settings} alt="" />
                    </div>
                </div>

                <div className="flex-row g-40">
                    <div>
                        <span className="fw-600">{user.posts.length}</span>{" "}
                        publications
                    </div>
                    <div>
                        <span className="fw-600">0</span> abonnés
                    </div>
                    <div>
                        <span className="fw-600">0</span> abonnements
                    </div>
                </div>

                <div className="flex-row">
                    <div className="fw-600">{user.fullname}</div>
                </div>
            </div>

            {settingsDialog && (
                <AuthProfileSettingsDialog displayDialog={setSettingsDialog} />
            )}
        </div>
    );
};

export default AuthProfil;
