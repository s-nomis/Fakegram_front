import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../redux/features/authSlice";
import LoadingSpinner from "../LoadingSpinner";
import NotFound from "../NotFound";

import "react-toastify/dist/ReactToastify.css";

const PasswordUpdateForm = () => {
    const dispatch = useDispatch();

    const { loading, user } = useSelector((state) => state.auth);

    const [passwordInput, setPasswordInput] = useState({
        password: "",
        newPassword: "",
        newPasswordConfirm: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updatePassword({ userId: user._id, data: passwordInput }));

        setPasswordInput({
            ...passwordInput,
            password: "",
            newPassword: "",
            newPasswordConfirm: "",
        });
    };

    return (
        <div className="flex-col g-16 width-100 mt-32 mb-32">
            {loading ? (
                <div className="flex-row flex-center">
                    <LoadingSpinner />
                </div>
            ) : user ? (
                <>
                    <div className="flex-row width-100">
                        <div className="aside flex-row flex-justify-end">
                            <img
                                src={user.avatar}
                                alt=""
                                className="avatar"
                                width={38}
                            />
                        </div>

                        <div className="flex-row flex-align-center">
                            <h1 className="title fw-400 mb-2">
                                {user.username}
                            </h1>
                        </div>
                    </div>

                    <form
                        className="flex-col g-16 width-100"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor="old-password">
                                    Ancien mot de passe
                                </label>
                            </aside>
                            <div className="input-update-container">
                                <input
                                    id="old-password"
                                    type="password"
                                    className="input-update-password"
                                    onChange={(e) =>
                                        setPasswordInput({
                                            ...passwordInput,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor="new-password">
                                    Nouveau mot de passe
                                </label>
                            </aside>
                            <div className="input-update-container">
                                <input
                                    id="new-password"
                                    type="password"
                                    className="input-update-password"
                                    onChange={(e) =>
                                        setPasswordInput({
                                            ...passwordInput,
                                            newPassword: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor="confirmation">
                                    Confirmer le nouveau mot de passe
                                </label>
                            </aside>
                            <div className="input-update-container">
                                <input
                                    id="confirmation"
                                    type="password"
                                    className="input-update-password"
                                    onChange={(e) =>
                                        setPasswordInput({
                                            ...passwordInput,
                                            newPasswordConfirm: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor=""></label>
                            </aside>
                            <div className="mt-16">
                                <button
                                    className={
                                        "btn btn-primary btn-small fw-600" +
                                        (passwordInput.password === "" ||
                                        passwordInput.newPassword === "" ||
                                        passwordInput.newPasswordConfirm === ""
                                            ? " disabled"
                                            : "")
                                    }
                                    type="submit"
                                    disabled={
                                        passwordInput.password === "" ||
                                        passwordInput.newPassword === "" ||
                                        passwordInput.newPasswordConfirm === ""
                                    }
                                >
                                    Modifier le mot de passe
                                </button>
                            </div>
                        </div>
                    </form>
                </>
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default PasswordUpdateForm;
