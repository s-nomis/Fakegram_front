import React, { useState } from "react";

import chatFilled from "../assets/icons/chat-full.png";
import heartFilled from "../assets/icons/heart-full.png";

const Miniature = ({ post, setCurrentPost, displayPost }) => {
    const [showStats, setShowStats] = useState(false);

    const displayDialog = () => {
        setCurrentPost(post);
        displayPost(true);
    };

    return (
        <>
            <div className="relative">
                <div onPointerOver={() => setShowStats(true)}>
                    <img src={post.image} alt="" className="miniature" />
                </div>

                {showStats && (
                    <div
                        className="miniature-overlay"
                        onPointerLeave={() => setShowStats(false)}
                        onClick={displayDialog}
                    >
                        <div className="flex-row flex-center g-32 height-100 white">
                            {post.likes.length > 0 && (
                                <div className="flex-row g-8 fw-600">
                                    <div className="icon">
                                        <img
                                            src={heartFilled}
                                            alt=""
                                            className="filter-white"
                                        />
                                    </div>
                                    {post.likes.length}
                                </div>
                            )}
                            <div className="flex-row g-8 fw-600">
                                <div className="icon">
                                    <img
                                        src={chatFilled}
                                        alt=""
                                        className="filter-white"
                                    />
                                </div>
                                {post.comments.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Miniature;
