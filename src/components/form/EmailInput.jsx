import React from "react";
import validator from "validator";
import { isEmailFree } from "../../redux/app/api";

import valid from "../../assets/icons/check-mark.png";
import invalid from "../../assets/icons/cancel.png";

const EmailInput = ({ email, setEmail }) => {
    const validateEmail = async () => {
        if (!validator.isEmail(email.value)) {
            setEmail({
                ...email,
                isValid: false,
                checked: true,
                error: "Email invalide.",
            });
        } else {
            const response = await isEmailFree(email.value);

            if (response.status === 200) {
                setEmail({
                    ...email,
                    isValid: response.data.free_email,
                    checked: true,
                    error: !response.data.free_username
                        ? "Email déjà utilisée"
                        : "",
                });
            } else {
                setEmail({
                    ...email,
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
                    id="email"
                    onChange={(e) =>
                        setEmail({ ...email, value: e.target.value })
                    }
                    onBlur={validateEmail}
                    className={`input-register ${
                        email.value ? "has-value" : ""
                    }`}
                />
                <label htmlFor="email" className="label-register">
                    Adresse Email
                </label>
            </div>

            <div className="flex-row">
                {email.checked && (
                    <span className="mt-auto mb-auto mr-8">
                        <img src={email.isValid ? valid : invalid} alt="" />
                    </span>
                )}
            </div>
        </div>
    );
};

export default EmailInput;
