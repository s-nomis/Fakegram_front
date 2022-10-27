import React from "react";
import SettingsMenu from "./SettingsMenu";

const Settings = ({ activeMenu, children }) => {
    return (
        <div className="settings-container xl-container">
            <div className="settings-menu-container">
                <SettingsMenu active={activeMenu} />
            </div>
            <div className="settings-main-content">{children}</div>
        </div>
    );
};

export default Settings;
