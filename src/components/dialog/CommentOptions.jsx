import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../redux/features/commentsSlice";
import DialogComponent from "./DialogComponent";

const CommentOptions = ({ comment, displayDialog }) => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);

    const handleDelete = () => {
        dispatch(
            deleteComment({ postId: comment.photo, commentId: comment._id })
        );
    };

    return (
        <DialogComponent displayDialog={displayDialog}>
            <div
                className="sm-container dialog-container"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="btn btn-dialog btn-danger btn-large fw-600 disabled">
                    Signaler
                </button>
                <hr />

                {user && comment.owner.id === user.id && (
                    <>
                        <button
                            className="btn btn-dialog btn-danger btn-large fw-600"
                            onClick={handleDelete}
                        >
                            Supprimer
                        </button>
                        <hr />
                    </>
                )}

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

export default CommentOptions;
