import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommentDate from "../CommentDate";
import CommentOptions from "../dialog/CommentOptions";

import dots from "../../assets/icons/dots.png";

const CommentExpanded = ({ comment }) => {
    const [showDots, setShowDots] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div className="flex-row flex-align-center g-10 mb-6 mt-6 pl-16">
            <Link to={`/${comment.owner.username}`}>
                <img
                    className="avatar post-avatar"
                    src={comment.owner.avatar}
                    alt=""
                />
            </Link>

            <div className="text-medium flex-col g-10">
                <div className="flex-row g-5">
                    <Link to={`/${comment.owner.username}`} className="fw-600">
                        {comment.owner.username}
                    </Link>

                    <div className="fw-400">{comment.content}</div>
                </div>

                <div
                    className="flex-row g-10 text-small gray"
                    onPointerEnter={() => setShowDots(true)}
                    onPointerLeave={() => setShowDots(false)}
                >
                    <CommentDate date={comment.createdAt} />
                    <div className="fw-600">Répondre</div>
                    {showDots && (
                        <div
                            className="icon"
                            onClick={() => setShowDialog(true)}
                        >
                            <img
                                src={dots}
                                alt=""
                                className="small filter-gray"
                            />
                        </div>
                    )}
                </div>
            </div>

            {showDialog && (
                <CommentOptions
                    comment={comment}
                    displayDialog={setShowDialog}
                />
            )}
        </div>
    );
};

export default CommentExpanded;
