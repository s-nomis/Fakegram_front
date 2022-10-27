import React from "react";
import Miniature from "../Miniature";

const UserPosts = ({ user, setCurrentPost, displayPost }) => {
    return (
        <>
            {user.photos ? (
                user.photos.map((post) => (
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

export default UserPosts;
