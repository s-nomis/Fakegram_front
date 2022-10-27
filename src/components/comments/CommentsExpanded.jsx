import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/features/commentsSlice";
import LoadingSpinner from "../LoadingSpinner";
import CommentExpanded from "./CommentExpanded";

const CommentsExpanded = ({ postId }) => {
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.comments);
    const comments = useSelector((state) => state.comments.comments[postId]);

    let iterableComments = [];
    if (comments) {
        iterableComments = [...comments];
    }

    useEffect(() => {
        dispatch(getComments(postId));
    }, [postId]);

    return (
        <div className="comments-expanded-container">
            {loading ? (
                <div className="flex-col flex-center text-center width-100 height-100">
                    <LoadingSpinner />
                </div>
            ) : iterableComments.length === 0 ? (
                <div className="flex-col flex-center text-center width-100 height-100">
                    <h2>Aucun commentaire pour l'instant.</h2>
                    <div className="subtitle">Lancer la conversation.</div>
                </div>
            ) : (
                <div className="comments-container">
                    {iterableComments.map((comment) => (
                        <CommentExpanded key={comment._id} comment={comment} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentsExpanded;
