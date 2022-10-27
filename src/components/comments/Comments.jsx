import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const Comments = ({ postId, displayPost }) => {
    const comments = useSelector((state) => state.comments.comments[postId]);

    let iterableComments = [];
    if (comments) {
        iterableComments = [...comments];
    }

    return (
        <div>
            {iterableComments &&
                (iterableComments.length > 2 ? (
                    <>
                        <div className="mt-5 mb-5 gray">
                            <p
                                onClick={() => displayPost(true)}
                                className="hover"
                            >{`Afficher les ${iterableComments.length} commentaires`}</p>
                        </div>
                        <div className="flex-col g-5">
                            {iterableComments
                                .sort(
                                    (a, b) =>
                                        new Date(b.createdAt) -
                                        new Date(a.createdAt)
                                )
                                .slice(0, 2)
                                .map((comment) => (
                                    <Comment
                                        key={comment._id}
                                        comment={comment}
                                    />
                                ))}
                        </div>
                    </>
                ) : (
                    <div className="flex-col g-5">
                        {iterableComments.map((comment) => (
                            <Comment key={comment._id} comment={comment} />
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default Comments;
