import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import PasswordUpdateForm from "../components/settings/PasswordUpdateForm";
import SettingsPage from "../components/settings/SettingsPage";

const ChangePassword = () => {
    return (
        <div className="container flex-col">
            <Navbar />

            <main className="mb-32">
                <SettingsPage activeMenu={2}>
                    <PasswordUpdateForm />
                </SettingsPage>
            </main>

            <Footer />
        </div>
    );
};

export default ChangePassword;
