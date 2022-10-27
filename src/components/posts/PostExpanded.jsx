import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostDate from "../PostDate";
import SocialsButtons from "../posts/SocialsButtons";
import LikesCount from "../posts/LikesCount";
import AddComment from "../comments/AddComment";
import CommentsExpanded from "../comments/CommentsExpanded";
import MoreOptionsDialog from "../dialog/MoreOptionsDialog";
import EditPostDialog from "../dialog/EditPostDialog";
import DeletePostDialog from "../dialog/DeletePostDialog";

import dots from "../../assets/icons/dots.png";

const PostExpanded = ({ post, linkToPost }) => {
    const [optionDialog, setOptionDialog] = useState(false);
    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);

    return (
        <>
            <div
                className="post post-page flex-row xl-container"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="post-expanded">
                    <img src={post.image} alt="" />
                </div>

                <div className="post-infos flex-col">
                    <section className="post-header flex-row flex-align-center flex-space-between">
                        <div className="post-owner flex-row flex-align-center g-10">
                            <Link to={`/${post.owner.username}`}>
                                <img
                                    className="avatar post-avatar"
                                    src={post.owner.avatar}
                                    alt=""
                                />
                            </Link>

                            <Link
                                to={`/${post.owner.username}`}
                                className="no-decoration"
                            >
                                {post.owner.username}
                            </Link>
                        </div>

                        <div className="icon">
                            <img
                                src={dots}
                                alt=""
                                onClick={() => setOptionDialog(true)}
                                className="small"
                            />
                        </div>
                    </section>

                    <hr />

                    <CommentsExpanded postId={post._id} />

                    <hr />

                    <section className="post-socials">
                        <SocialsButtons post={post} />
                        <LikesCount likes={post.likes} />
                        <PostDate date={post.createdAt} />
                    </section>

                    <hr />

                    <section>
                        <AddComment postId={post._id} />
                    </section>
                </div>
            </div>

            {optionDialog && (
                <MoreOptionsDialog
                    post={post}
                    linkToPost={linkToPost}
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
        </>
    );
};

export default PostExpanded;
