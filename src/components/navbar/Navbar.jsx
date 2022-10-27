import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserMenu from "./UserMenu";
import SearchInput from "./SearchInput";
import ImgInputDialog from "../dialog/ImgInputDialog";
import CreatePostDialog from "../dialog/CreatePostDialog";

import home from "../../assets/icons/home.png";
import homeFull from "../../assets/icons/home-full.png";
import send from "../../assets/icons/send.png";
import sendFull from "../../assets/icons/send-full.png";
import add from "../../assets/icons/add.png";
import addFull from "../../assets/icons/add-full.png";
import explore from "../../assets/icons/explore.png";
import exploreFull from "../../assets/icons/explore-full.png";
import heart from "../../assets/icons/heart.png";
import heartFull from "../../assets/icons/heart-full.png";

const Navbar = ({ activeTab = 0 }) => {
    //state utile pour la création d'un nouveau post
    const [dialogUploadImg, setDialogUploadImg] = useState(false);
    const [dialogCreatePost, setDialogCreatePost] = useState(false);
    const [imgFile, setImgFile] = useState("");

    const [homeActive, setHomeActive] = useState(false);
    const [sendActive, setSendActive] = useState(false);
    const [addActive, setAddActive] = useState(false);
    const [exploreActive, setExploreActive] = useState(false);
    const [likeActive, setLikeActive] = useState(false);

    const setActive = (tab) => {
        setHomeActive(false);
        setSendActive(false);
        setAddActive(false);
        setExploreActive(false);
        setLikeActive(false);

        switch (tab) {
            case 1:
                setHomeActive(true);
                break;
            case 2:
                setSendActive(true);
                break;
            case 3:
                setAddActive(true);
                break;
            case 4:
                setExploreActive(true);
                break;
            case 5:
                setLikeActive(true);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setActive(activeTab);
    }, []);

    return (
        <>
            <div className="nav flex-row flex-center">
                <div className="nav-grid xl-container">
                    <NavLink to={"/"}>
                        <h1 className="logo">Fakegram</h1>
                    </NavLink>

                    <SearchInput />

                    <div className="nav-menu flex-row g-25 mt-auto mb-auto">
                        <div className="icon" onClick={() => setActive(1)}>
                            <NavLink to={"/"}>
                                <img
                                    src={homeActive ? homeFull : home}
                                    alt=""
                                />
                            </NavLink>
                        </div>

                        <div
                            className="icon disabled"
                            onClick={() => setActive(2)}
                        >
                            <img src={sendActive ? sendFull : send} alt="" />
                        </div>

                        <div className="icon" onClick={() => setActive(3)}>
                            <img
                                src={addActive ? addFull : add}
                                alt=""
                                onClick={() => setDialogUploadImg(true)}
                            />
                        </div>

                        <div
                            className="icon disabled"
                            onClick={() => setActive(4)}
                        >
                            <img
                                src={exploreActive ? exploreFull : explore}
                                alt=""
                            />
                        </div>

                        <div
                            className="icon disabled"
                            onClick={() => setActive(5)}
                        >
                            <img src={likeActive ? heartFull : heart} alt="" />
                        </div>

                        <UserMenu />
                    </div>
                </div>
            </div>

            <div>
                <ToastContainer />
            </div>

            {dialogUploadImg && (
                <ImgInputDialog
                    displayDialog={setDialogUploadImg}
                    displayNextDialog={setDialogCreatePost}
                    imgFile={setImgFile}
                />
            )}
            {dialogCreatePost && (
                <CreatePostDialog
                    displayPrevDialog={setDialogUploadImg}
                    displayDialog={setDialogCreatePost}
                    imgFile={imgFile}
                />
            )}
        </>
    );
};

export default Navbar;
