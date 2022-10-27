import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../redux/features/postSlice";
import Navbar from "../components/navbar/Navbar";
import PostExpanded from "../components/posts/PostExpanded";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";

const Post = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { loading, post, error } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    return (
        <div className="container flex-col">
            <Navbar />

            <main>
                {loading ? (
                    <div className="flex-row flex-center width-100 height-100">
                        <LoadingSpinner />
                    </div>
                ) : post ? (
                    <PostExpanded post={post} linkToPost={false} />
                ) : (
                    <NotFound />
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Post;
