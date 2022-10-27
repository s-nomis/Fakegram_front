import React from "react";
import { isUsernameFree } from "../../redux/app/api";

import valid from "../../assets/icons/check-mark.png";
import invalid from "../../assets/icons/cancel.png";

const UsernameInput = ({ username, setUsername }) => {
    const validateUsername = async () => {
        const regex = new RegExp("^[a-zA-Z][a-zA-Z0-9_.-]{3,19}$");

        if (!regex.test(username.value) || username.value.length < 4) {
            setUsername({
                ...username,
                isValid: false,
                checked: true,
                error: "Nom d'utilisateur invalide.\nLe nom d'utilisateur doit contenir entre 4 et 20 caractères.\nIl doit commencer par une lettre, et peut contenir les caractères suivants : _ . -",
            });
        } else {
            const response = await isUsernameFree(username.value);

            if (response.status === 200) {
                setUsername({
                    ...username,
                    isValid: response.data.free_username,
                    checked: true,
                    error: !response.data.free_username
                        ? "Nom d'utilisateur déjà existant"
                        : "",
                });
            } else {
                setUsername({
                    ...username,
                    isValid: false,
                    checked: true,
                    error: "Une erreur est survenu.\nVeuillez réessayer plus tard.",
                });
            }
        }
    };

    return (
        <div className="auth-input-container">
            <div className="input-component">
                <input
                    type="text"
                    id="username"
                    onChange={(e) =>
                        setUsername({ ...username, value: e.target.value })
                    }
                    onBlur={validateUsername}
                    className={`input-register ${
                        username.value ? "has-value" : ""
                    }`}
                />
                <label htmlFor="username" className="label-register">
                    Nom d'utilisateur
                </label>
            </div>

            <div className="flex-row">
                {username.checked && (
                    <span className="mt-auto mb-auto mr-8">
                        <img src={username.isValid ? valid : invalid} alt="" />
                    </span>
                )}
            </div>
        </div>
    );
};

export default UsernameInput;
