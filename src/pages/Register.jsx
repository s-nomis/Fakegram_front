import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import RegisterForm from "../components/form/RegisterForm";

const Register = () => {
    return (
        <div className="fullscreen-container">
            <div className="flex-row flex-center height-100">
                <div className="auth-container">
                    <div className="box-container">
                        <h1 className="logo-large text-center mb-15">
                            Fakegram
                        </h1>

                        <div className="width-80 mr-auto ml-auto">
                            <h2 className="register-title">
                                Inscrivez-vous pour voir les photos et vidéos de
                                vos amis.
                            </h2>
                            <hr className="mt-20 mb-20" />

                            <RegisterForm />
                        </div>
                    </div>

                    <div className="box-container">
                        <p className="text-center text-medium">
                            Vous avez un compte ?{" "}
                            <NavLink to={"/login"}>
                                <span className="blue fw-600">
                                    Connectez-vous
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

export default Register;
