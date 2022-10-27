import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import LoginForm from "../components/form/LoginForm";

const Login = () => {
    const { loading, error } = useSelector((state) => state.auth);

    return (
        <div className="fullscreen-container">
            <div className="flex-row flex-center height-100">
                <div className="auth-container">
                    <div className="box-container">
                        <h1 className="logo-large text-center mb-15">
                            Fakegram
                        </h1>
                        <div className="width-80 mr-auto ml-auto">
                            <LoginForm loading={loading} />

                            <hr className="mt-20 mb-20" />
                        </div>

                        {error && error !== "Please authenticate." && (
                            <p className="error mb-10">
                                L'email ou le mot de passe saisi est incorrect.
                                <br />
                                Veuillez réessayer.
                            </p>
                        )}

                        <p className="text-center text-small gray">
                            Mot de passe oublié ?
                        </p>
                    </div>

                    <div className="box-container">
                        <p className="text-center text-medium">
                            Vous n'avez pas de compte ?{" "}
                            <NavLink to={"/register"}>
                                <span className="blue fw-600">
                                    Inscrivez-vous
                                </span>
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
