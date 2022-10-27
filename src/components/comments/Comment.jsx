import React from "react";

const Comment = ({ comment }) => {
    return (
        <div>
            <span className="fw-600">{comment.owner.username}</span>
            <span>&nbsp;</span>
            <span>{comment.content}</span>
        </div>
    );
};

export default Comment;
