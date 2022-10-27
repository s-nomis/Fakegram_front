import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getComments } from "../../redux/features/commentsSlice";
import Comments from "../comments/Comments";
import AddComment from "../comments/AddComment";
import SocialsButtons from "./SocialsButtons";
import LikesCount from "./LikesCount";
import PostDate from "../PostDate";
import MoreOptionsDialog from "../dialog/MoreOptionsDialog";
import EditPostDialog from "../dialog/EditPostDialog";
import DeletePostDialog from "../dialog/DeletePostDialog";
import DisplayPostDialog from "../dialog/DisplayPostDialog";

import dots from "../../assets/icons/dots.png";

const PostFeed = ({ post }) => {
    const dispatch = useDispatch();

    const [optionDialog, setOptionDialog] = useState(false);
    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [displayPost, setDisplayPost] = useState(false);

    useEffect(() => {
        dispatch(getComments(post._id));
    }, []);

    return (
        <>
            <div className="post post-feed flex-col md-container">
                <section className="flex-row flex-align-center flex-space-between post-header">
                    <div className="flex-row flex-align-center post-owner g-10">
                        <Link to={`/${post.owner.username}`}>
                            <img
                                className="avatar post-avatar"
                                src={post.owner.avatar}
                                alt=""
                            />
                        </Link>

                        <Link to={`/${post.owner.username}`}>
                            {post.owner.username}
                        </Link>
                    </div>

                    <div className="icon">
                        <img
                            src={dots}
                            alt=""
                            className="small"
                            onClick={() => setOptionDialog(true)}
                        />
                    </div>
                </section>

                <section className="post-content">
                    <img src={post.image} alt="" />
                </section>

                <section className="post-socials">
                    <SocialsButtons post={post} />
                    <LikesCount likes={post.likes} />

                    {post.description !== "undefined" && (
                        <div className="mb-5">
                            <span className="fw-600">
                                {post.owner.username}
                            </span>
                            <span>&nbsp;</span>
                            <span>{post.description}</span>
                        </div>
                    )}

                    <Comments postId={post._id} displayPost={setDisplayPost} />
                    <PostDate date={post.createdAt} />
                </section>

                <hr />

                <section className="post-footer">
                    <AddComment postId={post._id} />
                </section>
            </div>

            {optionDialog && (
                <MoreOptionsDialog
                    post={post}
                    linkToPost={true}
                    displayOptionsDialog={setOptionDialog}
                    displayEditDialog={setEditDialog}
                    displayDeleteDialog={setDeleteDialog}
                />
            )}

            {editDialog && (
                <EditPostDialog post={post} displayEditDialog={setEditDialog} />
            )}

            {deleteDialog && (
                <DeletePostDialog
                    postId={post._id}
                    displayDeleteDialog={setDeleteDialog}
                />
            )}

            {displayPost && (
                <DisplayPostDialog
                    id={post.id}
                    displayDialog={setDisplayPost}
                />
            )}
        </>
    );
};

export default PostFeed;
