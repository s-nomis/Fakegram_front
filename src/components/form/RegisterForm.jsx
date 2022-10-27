import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/features/authSlice";
import UsernameInput from "./UsernameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState({
        value: "",
        isValid: false,
        checked: false,
        error: "",
    });
    const [email, setEmail] = useState({
        value: "",
        isValid: false,
        checked: false,
        error: "",
    });
    const [password, setPassword] = useState({
        value: "",
        isValid: false,
        checked: false,
        error: "",
    });
    const [confirmPassword, setConfirmPassword] = useState({
        value: "",
        isValid: false,
        checked: false,
        error: "",
    });
    const [errors, setErrors] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username.isValid) {
            setErrors(username.error);
            return;
        }

        if (!email.isValid) {
            setErrors(email.error);
            return;
        }

        if (!password.isValid) {
            setErrors(password.error);
            return;
        }

        if (!confirmPassword.isValid) {
            setErrors(confirmPassword.error);
            return;
        }

        const data = {
            username: username.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
        };

        dispatch(register({ data, navigate }));
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <UsernameInput username={username} setUsername={setUsername} />

            <EmailInput email={email} setEmail={setEmail} />

            <PasswordInput
                password={password}
                setPassword={setPassword}
                inputId={"password"}
                inputLabel={"Mot de passe"}
            />

            <PasswordInput
                password={confirmPassword}
                setPassword={setConfirmPassword}
                inputId={"confirmPassword"}
                inputLabel={"Confirmation du mot de passe"}
                confirmPassword={password}
            />

            <p className="text-center text-small gray mt-10 mb-5 pl-5 pr-5">
                En vous inscrivant, vous acceptez nos{" "}
                <span className="fw-600">Conditions générales</span>. Découvrez
                comment nous recueillons, utilisons et partageons vos données en
                lisant notre{" "}
                <span className="fw-600">
                    Politique d’utilisation des données
                </span>{" "}
                et comment nous utilisons les cookies et autres technologies
                similaires en consultant notre{" "}
                <span className="fw-600">
                    Politique d’utilisation des cookies
                </span>
                .
            </p>

            <button
                type="submit"
                className="btn btn-primary btn-small width-100 fw-600 mt-10"
            >
                S'inscrire
            </button>

            {errors && <div className="error">{errors}</div>}
        </form>
    );
};

export default RegisterForm;
