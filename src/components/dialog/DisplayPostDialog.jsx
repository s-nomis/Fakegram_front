import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/features/postSlice";
import LoadingSpinner from "../LoadingSpinner";
import NotFound from "../NotFound";
import PostExpanded from "../posts/PostExpanded";
import DialogComponent from "./DialogComponent";

const DisplayPostDialog = ({ id, displayDialog }) => {
    const dispatch = useDispatch();

    const { loading, post, error } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    return (
        <DialogComponent displayDialog={displayDialog}>
            {loading ? (
                <LoadingSpinner />
            ) : post ? (
                <PostExpanded post={post} linkToPost={true} />
            ) : (
                <NotFound />
            )}
        </DialogComponent>
    );
};

export default DisplayPostDialog;
