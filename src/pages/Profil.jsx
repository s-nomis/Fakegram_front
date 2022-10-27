import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../redux/features/userSlice";
import Navbar from "../components/navbar/Navbar";
import UserPosts from "../components/profil/UserPosts";
import SavedPosts from "../components/profil/SavedPosts";
import AuthProfil from "../components/profil/AuthProfil";
import UserProfil from "../components/profil/UserProfil";
import DisplayPostDialog from "../components/dialog/DisplayPostDialog";

import grid from "../assets/icons/grid.png";
import bookmark from "../assets/icons/bookmark.png";
import tag from "../assets/icons/user.svg";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";

const Profil = ({ activeTab = "Publication" }) => {
    const { username } = useParams();
    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => state.user);
    const user = useSelector((state) => state.user.user);

    const authUser = useSelector((state) => state.auth.user);

    const [userPosts, setUserPosts] = useState(true);
    const [userSaved, setUserSaved] = useState(false);
    const [userTagged, setUserTagged] = useState(false);
    const [displayPost, setDisplayPost] = useState(false);
    const [currentPost, setCurrentPost] = useState();

    const displayView = (posts, saved, tagged) => {
        setUserPosts(posts);
        setUserSaved(saved);
        setUserTagged(tagged);
    };

    useEffect(() => {
        dispatch(getUserByUsername(username));

        setUserPosts(activeTab.includes("Publication"));
        setUserSaved(activeTab.includes("Enregistrement"));
    }, [username, activeTab]);

    return (
        <div className="container flex-col">
            <Navbar />

            <main>
                {loading ? (
                    <div className="flex-row flex-center width-100 height-100">
                        <LoadingSpinner />
                    </div>
                ) : error ? (
                    <NotFound />
                ) : (
                    user && (
                        <div className="xl-container">
                            {authUser.username === username ? (
                                <AuthProfil user={user} />
                            ) : (
                                <UserProfil user={user} />
                            )}

                            <div className="selector-container">
                                <div
                                    className={
                                        "flex-row g-6 faded" +
                                        (userPosts ? " active" : "")
                                    }
                                    onClick={() =>
                                        displayView(true, false, false)
                                    }
                                >
                                    <div className="icon">
                                        <img
                                            src={grid}
                                            alt=""
                                            className="small"
                                        />
                                    </div>
                                    <div className="selector-title">
                                        Publications
                                    </div>
                                </div>

                                {user._id === authUser._id && (
                                    <div
                                        className={
                                            "flex-row g-6 faded" +
                                            (userSaved ? " active" : "")
                                        }
                                        onClick={() =>
                                            displayView(false, true, false)
                                        }
                                    >
                                        <div className="icon">
                                            <img
                                                src={bookmark}
                                                alt=""
                                                className="small"
                                            />
                                        </div>
                                        <div className="selector-title">
                                            Enregistrements
                                        </div>
                                    </div>
                                )}
                                <div
                                    className={
                                        "flex-row g-6 faded" +
                                        (userTagged ? " active" : "")
                                    }
                                    // onClick={() => displayView(false, false, true)}
                                >
                                    <div className="icon">
                                        <img
                                            src={tag}
                                            alt=""
                                            className="small"
                                        />
                                    </div>
                                    <div className="selector-title">
                                        Identifié(e)
                                    </div>
                                </div>
                            </div>

                            <div className="selection-container">
                                {userPosts && (
                                    <UserPosts
                                        user={user}
                                        setCurrentPost={setCurrentPost}
                                        displayPost={setDisplayPost}
                                    />
                                )}

                                {userSaved &&
                                    (user._id === authUser._id ? (
                                        <SavedPosts
                                            user={user}
                                            setCurrentPost={setCurrentPost}
                                            displayPost={setDisplayPost}
                                        />
                                    ) : (
                                        <UserPosts
                                            user={user}
                                            setCurrentPost={setCurrentPost}
                                            displayPost={setDisplayPost}
                                        />
                                    ))}

                                {userTagged && <div>Tagged</div>}
                            </div>
                        </div>
                    )
                )}

                {displayPost && (
                    <DisplayPostDialog
                        id={currentPost.id}
                        displayDialog={setDisplayPost}
                    />
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Profil;
