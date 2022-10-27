import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/authSlice";

import profile from "../../assets/icons/user.png";
import bookmark from "../../assets/icons/bookmark.png";
import settings from "../../assets/icons/setting.png";
import exchange from "../../assets/icons/exchange.png";

const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => ({ ...state.auth }));
    const [displayProfileMenu, setDisplayProfileMenu] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="icon relative">
            <img
                src={user && user.avatar}
                className="avatar nav-avatar"
                alt=""
                onClick={() => setDisplayProfileMenu(true)}
            />

            {displayProfileMenu && (
                <div className="nav-menu-user-container">
                    <div
                        className="fullscreen"
                        onClick={() => setDisplayProfileMenu(false)}
                    ></div>

                    <div className="nav-dialog">
                        <div className="arrow arrow-right"></div>

                        <div className="nav-menu-user flex-col">
                            <NavLink
                                className="menu-item"
                                to={`/${user.username}`}
                            >
                                <div className="icon">
                                    <img
                                        src={profile}
                                        alt=""
                                        className="small"
                                    />
                                </div>
                                <div className="item-label">Profil</div>
                            </NavLink>

                            <NavLink
                                className="menu-item"
                                to={`/${user.username}/saved`}
                            >
                                <div className="icon">
                                    <img
                                        src={bookmark}
                                        alt=""
                                        className="small"
                                    />
                                </div>
                                <div className="item-label">Enregistré</div>
                            </NavLink>

                            <NavLink className="menu-item" to={"/account/edit"}>
                                <div className="icon">
                                    <img
                                        src={settings}
                                        alt=""
                                        className="small"
                                    />
                                </div>
                                <div className="item-label">Paramètres</div>
                            </NavLink>

                            <div className="menu-item disabled">
                                <div className="icon">
                                    <img
                                        src={exchange}
                                        alt=""
                                        className="small"
                                    />
                                </div>
                                <div className="item-label">
                                    Changer de compte
                                </div>
                            </div>

                            <hr />

                            <div
                                className="menu-item"
                                onClick={() => handleLogout()}
                            >
                                <div className="item-label">Déconnexion</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
