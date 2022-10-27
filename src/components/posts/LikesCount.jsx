import React from "react";

const LikesCount = ({ likes }) => {
    return (
        <div className="fw-600 mb-5">
            {likes && likes.length > 0 ? (
                <div>{likes.length} J'aime</div>
            ) : (
                <div>Soyez la première personne à aimer ça.</div>
            )}
        </div>
    );
};

export default LikesCount;
