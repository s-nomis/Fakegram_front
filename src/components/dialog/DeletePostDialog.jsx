import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../redux/features/postSlice";
import DialogComponent from "./DialogComponent";

const DeletePostDialog = ({ postId, displayDeleteDialog }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deletePost(postId));

        displayDeleteDialog(false);
    };

    // const handleRedirect = () => {
    //     const location = window.location.pathname;

    //     if (location === "/") {
    //         //Pas de redirection, on n'affiche plus le dialog
    //         displayDeleteDialog(false);
    //     } else if (location.startsWith("/p/")) {
    //         //Sur la page du post, redirection vers /
    //         navigate("/");
    //     } else {
    //     }
    // };

    return (
        <DialogComponent displayDialog={displayDeleteDialog}>
            <div
                className="sm-container dialog-container"
                onClick={(e) => e.stopPropagation()}
            >
                <section className="flex-col flex-center text-center mt-32 mb-32 mr-16 ml-16">
                    <h4 className="dialog-title fw-600">
                        Supprimer la publication ?
                    </h4>
                    <p className="dialog-subtitle gray fw-400">
                        Souhaitez-vous vraiment supprimer cette publication ?
                    </p>
                </section>

                <hr />
                <button
                    className="btn btn-dialog btn-danger btn-large fw-600"
                    onClick={handleDelete}
                >
                    Suppr.
                </button>
                <hr />

                <button
                    className="btn btn-dialog btn-large"
                    onClick={() => displayDeleteDialog(false)}
                >
                    Annuler
                </button>
            </div>
        </DialogComponent>
    );
};

export default DeletePostDialog;
