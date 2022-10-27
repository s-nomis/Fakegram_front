import React from "react";
import DialogComponent from "./DialogComponent";

const UserProfileSettingsDialog = ({ displayDialog }) => {
    return (
        <DialogComponent displayDialog={displayDialog}>
            <div
                className="sm-container dialog-container"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="btn btn-dialog btn-danger btn-large fw-600 disabled">
                    Bloquer
                </button>
                <hr />

                <button className="btn btn-dialog btn-danger btn-large fw-600 disabled">
                    Resteindre
                </button>
                <hr />

                <button className="btn btn-dialog btn-danger btn-large fw-600 disabled">
                    Signaler
                </button>
                <hr />

                <button
                    className="btn btn-dialog btn-large"
                    onClick={() => displayDialog(false)}
                >
                    Annuler
                </button>
            </div>
        </DialogComponent>
    );
};

export default UserProfileSettingsDialog;
