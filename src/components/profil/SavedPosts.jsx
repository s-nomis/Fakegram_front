import React from "react";
import Miniature from "../Miniature";

const SavedPosts = ({ user, setCurrentPost, displayPost }) => {
    return (
        <>
            {user.saved_posts ? (
                user.saved_posts.map((post) => (
                    <Miniature
                        key={post._id}
                        post={post}
                        setCurrentPost={setCurrentPost}
                        displayPost={displayPost}
                    />
                ))
            ) : (
                <div>Pas de photos</div>
            )}
        </>
    );
};

export default SavedPosts;
