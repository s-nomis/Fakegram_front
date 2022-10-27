import React, { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearPosts,
    getMaxPosts,
    getPosts,
} from "../../redux/features/postsSlice";
import LoadingSpinner from "../LoadingSpinner";
import PostFeed from "./PostFeed";

const Posts = () => {
    const dispatch = useDispatch();

    /* Infinite Scrolling Start */

    const loader = useRef(null);
    const { loading, maxLength } = useSelector((state) => state.posts);
    const posts = useSelector((state) => state.posts.posts);

    const [pageNumber, setPageNumber] = useState(1);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPageNumber((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "150px",
            threshold: 0,
        };

        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) {
            observer.observe(loader.current);
        }
    }, [handleObserver, posts.length > 0]);

    //Use effect pour clear les posts dans le cas ou l'utilisateur
    //revient sur la page d'accueil, sinon certains posts sont en doublons
    useEffect(() => {
        if (posts.length > 0) {
            dispatch(clearPosts());
        }
    }, []);

    useEffect(() => {
        if (maxLength === 0) {
            dispatch(getMaxPosts());
        }

        dispatch(getPosts(pageNumber));
    }, [pageNumber]);

    /* Infinite Scrolling end */

    return (
        <div className="flex-col g-32">
            {posts.length > 0 ? (
                <>
                    {posts.map((post) => (
                        <PostFeed key={post._id} post={post} />
                    ))}

                    {loading && (
                        <div className="flex-row flex-center">
                            <LoadingSpinner />
                        </div>
                    )}

                    {maxLength === posts.length ? (
                        <div></div>
                    ) : (
                        <div ref={loader} />
                    )}
                </>
            ) : (
                <LoadingSpinner />
            )}
        </div>
    );
};

export default Posts;
