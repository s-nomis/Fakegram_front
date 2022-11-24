import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAvatar } from "../../redux/features/authSlice";
import DialogComponent from "./DialogComponent";

const EditAvatarDialog = ({ displayDialog }) => {
    const dispatch = useDispatch();

    const { loading, user } = useSelector((state) => state.auth);

    const [showForm, setShowForm] = useState(false);

    const revertDefault = () => {
        const form = new FormData();
        dispatch(updateAvatar({ userId: user._id, data: form }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("avatar", e.target.files[0]);

        dispatch(updateAvatar({ userId: user._id, data: form }));
        displayDialog(false);
    };

    return (
        <DialogComponent displayDialog={displayDialog}>
            <div
                className="sm-container dialog-container"
                onClick={(e) => e.stopPropagation()}
            >
                <section className="flex-col flex-center text-center mt-32 mb-32 mr-16 ml-16">
                    <h3 className="dialog-title fw-600">
                        Modifier la photo de profil
                    </h3>
                </section>

                <hr />
                <label
                    className="btn btn-dialog btn-success btn-large fw-700 text-center"
                    htmlFor="avatar-input"
                    onClick={() => setShowForm(true)}
                >
                    Importer une photo
                </label>

                <hr />
                <label
                    className="btn btn-dialog btn-danger btn-large fw-700 text-center"
                    onClick={revertDefault}
                >
                    Supprimer la photo actuelle
                </label>

                <hr />
                <label
                    className="btn btn-dialog btn-large text-center"
                    onClick={() => displayDialog(false)}
                >
                    Annuler
                </label>

                {showForm && (
                    <form>
                        <input
                            id="avatar-input"
                            type="file"
                            className="hidden"
                            onChange={handleSubmit}
                        />
                    </form>
                )}
            </div>
        </DialogComponent>
    );
};

export default EditAvatarDialog;
