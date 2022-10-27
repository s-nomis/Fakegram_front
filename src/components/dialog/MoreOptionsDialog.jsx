import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DialogComponent from "./DialogComponent";

const MoreOptionsDialog = ({
    post,
    linkToPost,
    displayOptionsDialog,
    displayEditDialog,
    displayDeleteDialog,
}) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const handleEdit = () => {
        displayOptionsDialog(false);
        displayEditDialog(true);
        displayDeleteDialog(false);
    };

    const handleDelete = () => {
        displayOptionsDialog(false);
        displayEditDialog(false);
        displayDeleteDialog(true);
    };

    const handleRedirect = () => {
        navigate(`/p/${post._id}`);
    };

    return (
        <DialogComponent displayDialog={displayOptionsDialog}>
            <div
                className="sm-container dialog-container"
                onClick={(e) => e.stopPropagation()}
            >
                {user && post.owner.id === user.id ? (
                    <>
                        <button
                            className="btn btn-dialog btn-danger btn-large fw-600"
                            onClick={handleDelete}
                        >
                            Supprimer
                        </button>
                        <hr />

                        <button
                            className="btn btn-dialog btn-large"
                            onClick={handleEdit}
                        >
                            Modifier
                        </button>
                        <hr />

                        <button className="btn btn-dialog btn-large disabled">
                            Masquer le nombre de mentions J'aime
                        </button>
                        <hr />

                        <button className="btn btn-dialog btn-large disabled">
                            Désactiver les commentaires
                        </button>
                        <hr />
                    </>
                ) : (
                    <>
                        <button className="btn btn-dialog btn-danger btn-large fw-600 disabled">
                            Signaler
                        </button>
                        <hr />

                        <button className="btn btn-dialog btn-danger btn-large fw-600 disabled">
                            Se désabonner
                        </button>
                        <hr />
                    </>
                )}

                {linkToPost && (
                    <>
                        <button
                            className="btn btn-dialog btn-large"
                            onClick={handleRedirect}
                        >
                            Accéder à la publication
                        </button>
                        <hr />
                    </>
                )}

                <button className="btn btn-dialog btn-large disabled">
                    Comptes identifiés
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    Partager sur...
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    Copier le lien
                </button>
                <hr />

                <button className="btn btn-dialog btn-large disabled">
                    Intégrer
                </button>
                <hr />

                <button
                    className="btn btn-dialog btn-large"
                    onClick={() => displayOptionsDialog(false)}
                >
                    Annuler
                </button>
            </div>
        </DialogComponent>
    );
};

export default MoreOptionsDialog;
