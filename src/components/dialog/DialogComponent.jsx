import React from "react";

import close from "../../assets/icons/close.png";

const DialogComponent = ({ displayDialog, children }) => {
    return (
        <div className="dialog" onClick={() => displayDialog(false)}>
            <div className="dialog-close">
                <img src={close} alt="" />
            </div>

            {children}
        </div>
    );
};

export default DialogComponent;
