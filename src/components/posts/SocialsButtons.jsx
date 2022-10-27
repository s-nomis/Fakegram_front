import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { favPost, likePost } from "../../redux/features/postSlice";
import LoadingSpinner from "../LoadingSpinner";

import heart from "../../assets/icons/heart.png";
import heartFilled from "../../assets/icons/heart-full.png";
import view from "../../assets/icons/chat.png";
import share from "../../assets/icons/send.png";
import bookmark from "../../assets/icons/bookmark.png";
import bookmarkFilled from "../../assets/icons/bookmark-full.png";

const SocialsButtons = ({ post }) => {
    const dispatch = useDispatch();

    const { loading, user } = useSelector((state) => state.auth);

    const toggleFav = () => {
        dispatch(favPost(post._id));
    };

    const toggleLikes = () => {
        dispatch(likePost(post._id));
    };

    return (
        <div className="flex-row flex-align-center flex-space-between mb-10">
            {loading || !user ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className="flex-row g-15">
                        <span className="icon" onClick={() => toggleLikes()}>
                            <img
                                src={
                                    post.likes.includes(user._id)
                                        ? heartFilled
                                        : heart
                                }
                                alt=""
                                className={
                                    post.likes.includes(user._id)
                                        ? "liked"
                                        : undefined
                                }
                            />
                        </span>
                        <span className="icon disabled">
                            <img src={view} alt="" />
                        </span>
                        <span className="icon disabled">
                            <img src={share} alt="" />
                        </span>
                    </div>
                    <div onClick={() => toggleFav()}>
                        <span className="icon">
                            <img
                                src={
                                    post.favorites.includes(user._id)
                                        ? bookmarkFilled
                                        : bookmark
                                }
                                alt=""
                            />
                        </span>
                    </div>
                </>
            )}
        </div>
    );
};

export default SocialsButtons;
