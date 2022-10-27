import React, { useState } from "react";

import valid from "../../assets/icons/check-mark.png";
import invalid from "../../assets/icons/cancel.png";

const PasswordInput = ({
    password,
    setPassword,
    inputId,
    inputLabel,
    confirmPassword,
}) => {
    const [visiblePassword, setVisiblePassword] = useState(false);

    const validatePassword = () => {
        /**
         * Mot de passe de plus de 6 caractères, avec au moins une minuscule,
         * une majuscule, un chiffre et un caractère spécial
         */
        const regex = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{6,}$"
        );

        if (regex.test(password.value)) {
            setPassword({
                ...password,
                isValid: true,
                checked: true,
            });
        } else {
            setPassword({
                ...password,
                isValid: false,
                checked: true,
                error: "Mot de passe invalide.\nLe mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre, un caractère spécial et faire plus de 6 caractères.",
            });
        }
    };

    const validatePasswordConfirmation = () => {
        if (password.value === confirmPassword.value) {
            setPassword({
                ...password,
                isValid: true,
                checked: true,
            });
        } else {
            setPassword({
                ...password,
                isValid: false,
                checked: true,
                error: "Les deux mots de passe doivent être identiques.",
            });
        }
    };

    return (
        <div className="auth-input-container">
            <div className="input-component">
                <input
                    type={visiblePassword ? "text" : "password"}
                    id={inputId}
                    onChange={(e) =>
                        setPassword({ ...password, value: e.target.value })
                    }
                    onBlur={
                        !confirmPassword
                            ? validatePassword
                            : validatePasswordConfirmation
                    }
                    className={`input-register ${
                        password.value ? "has-value" : ""
                    }`}
                />
                <label htmlFor={inputId} className="label-register">
                    {inputLabel}
                </label>
            </div>

            <div className="flex-row">
                {password.checked && (
                    <span className="mt-auto mb-auto mr-8">
                        <img src={password.isValid ? valid : invalid} alt="" />
                    </span>
                )}
                {password.value && (
                    <button
                        type="button"
                        className="btn btn-quaternary fw-600 mr-8"
                        onClick={() => setVisiblePassword(!visiblePassword)}
                    >
                        {visiblePassword ? "Masquer" : "Afficher"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default PasswordInput;
