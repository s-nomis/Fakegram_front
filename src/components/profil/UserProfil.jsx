import React, { useState } from "react";
import UserProfileSettingsDialog from "../dialog/UserProfileSettingsDialog";

import dots from "../../assets/icons/dots.png";

const UserProfil = ({ user }) => {
    const [settingsDialog, setSettingsDialog] = useState(false);

    return (
        <div className="flex-row g-100 pr-70 pl-70">
            <div>
                <img
                    src={user.avatar}
                    className="avatar profile-avatar"
                    alt=""
                />
            </div>

            <div className="flex-col g-20">
                <div className="flex-row flex-align-center g-15">
                    <h2 className="profile-title">{user.username}</h2>
                    <button className="btn btn-primary btn-small fw-600 disabled">
                        S'abonner
                    </button>
                    <div
                        className="icon m-10"
                        onClick={() => setSettingsDialog(true)}
                    >
                        <img src={dots} alt="" />
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
                <UserProfileSettingsDialog displayDialog={setSettingsDialog} />
            )}
        </div>
    );
};

export default UserProfil;
