import React from "react";
import Navbar from "../components/navbar/Navbar";
import SettingsPage from "../components/settings/SettingsPage";
import ProfileUpdateForm from "../components/settings/ProfileUpdateForm";
import Footer from "../components/Footer";

const Settings = () => {
    return (
        <div className="container flex-col">
            <Navbar />

            <main className="mb-32">
                <SettingsPage activeMenu={1}>
                    <ProfileUpdateForm />
                </SettingsPage>
            </main>

            <Footer />
        </div>
    );
};

export default Settings;
