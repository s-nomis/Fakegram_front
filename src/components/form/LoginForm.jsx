import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/features/authSlice";

const LoginForm = ({ loading }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email,
            password,
        };

        dispatch(login({ data, navigate }));
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="auth-input-container">
                <div className="input-component">
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setEmail(e.target.value)}
                        className={`input-register ${email ? "has-value" : ""}`}
                    />
                    <label htmlFor="username" className="label-register">
                        Adresse e-mail
                    </label>
                </div>
            </div>

            <div className="auth-input-container">
                <div className="input-component">
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className={`input-register ${
                            password ? "has-value" : ""
                        }`}
                    />
                    <label htmlFor="password" className="label-register">
                        Mot de passe
                    </label>
                </div>
            </div>

            <button className="btn btn-primary btn-small width-100 fw-600 mt-10">
                {loading ? "Chargement" : "Connexion"}
            </button>
        </form>
    );
};

export default LoginForm;
