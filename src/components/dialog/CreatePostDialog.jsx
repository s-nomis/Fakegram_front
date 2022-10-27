import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/features/postsSlice";
import LoadingSpinner from "../LoadingSpinner";
import EmojiPicker from "../comments/EmojiPicker";
import DialogComponent from "./DialogComponent";

import back from "../../assets/icons/back.png";
import smile from "../../assets/icons/smile.png";
import location from "../../assets/icons/location.png";
import down_arrow from "../../assets/icons/down-arrow.png";

const CreatePostDialog = ({ displayPrevDialog, displayDialog, imgFile }) => {
    const dispatch = useDispatch();
    const textarea = useRef(null);

    const { loading, user } = useSelector((state) => state.auth);

    const [description, setDescription] = useState();
    const [imgPreview, setImgPreview] = useState();
    const [visibleEmojiPicker, setVisibleEmojiPicker] = useState(false);

    const goBack = () => {
        displayDialog(false);
        displayPrevDialog(true);
    };

    const onEmojiClick = async (event) => {
        const emoji = event.native;
        const cursor = textarea.current.selectionStart;
        /**
         * On recupere le contenu du textarea avec le ref et pas le state
         * Le state cause quelques bugs comme un seul emoji possible a la fois, il faut alors fermer et ré-ouvrir le Picker
         *  */
        const value = textarea.current.value;

        const text = value.slice(0, cursor) + emoji + value.slice(cursor);
        setDescription(text);

        const newCursor = cursor + emoji.length;
        setTimeout(() => {
            textarea.current.setSelectionRange(newCursor, newCursor);
            textarea.current.focus();
        }, 10);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("title", "title");
        form.append("description", description);
        form.append("image", imgFile);

        dispatch(addPost(form));
        displayDialog(false);
    };

    useEffect(() => {
        const reader = new FileReader();
        reader.onload = function (ev) {
            setImgPreview(ev.target.result);
        };
        reader.readAsDataURL(imgFile);
    }, []);

    return (
        <DialogComponent displayDialog={displayDialog}>
            <div
                className="xxl-container dialog-container"
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={handleSubmit}>
                    <section className="dialog-header flex-row flex-align-center flex-space-between pl-16 pr-16">
                        <button className="btn btn-dialog" onClick={goBack}>
                            <img src={back} alt="" />
                        </button>

                        <h4 className="fw-600">Créer une publication</h4>

                        <button
                            type="submit"
                            className="btn btn-tertiary fw-600"
                        >
                            Partager
                        </button>
                    </section>
                    <hr />

                    <section className="flex-row">
                        <div className="dialog-post-img">
                            <img
                                src={imgPreview}
                                alt=""
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="dialog-post-infos">
                            <div className="ml-16">
                                {loading ? (
                                    <LoadingSpinner />
                                ) : (
                                    user && (
                                        <div className="flex-row g-12 mt-18 mr-16 mb-14">
                                            <img
                                                src={user.avatar}
                                                alt=""
                                                className="avatar"
                                                width={28}
                                            />
                                            <h4 className="mt-4 fw-600">
                                                {user.username}
                                            </h4>
                                        </div>
                                    )
                                )}

                                <textarea
                                    name="description"
                                    className="dialog-textarea"
                                    placeholder="Ajouter une légende..."
                                    value={description}
                                    ref={textarea}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                ></textarea>

                                <div className="relative">
                                    <div
                                        className="icon pt-8 pb-8"
                                        onClick={() =>
                                            setVisibleEmojiPicker(
                                                !visibleEmojiPicker
                                            )
                                        }
                                    >
                                        <img
                                            src={smile}
                                            alt=""
                                            className="filter-gray"
                                            height={20}
                                        />
                                    </div>
                                    {visibleEmojiPicker && (
                                        <div className="emoji-keyboard keyboard-down">
                                            <EmojiPicker
                                                perLine={6}
                                                locale="fr"
                                                navPosition="none"
                                                previewPosition="none"
                                                searchPosition="none"
                                                skinTonePosition="none"
                                                theme="light"
                                                onEmojiSelect={onEmojiClick}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <hr />
                            <div className="dialog-header flex-row flex-align-center flex-space-between ml-16 mr-16 disabled">
                                <div>Ajouter un lieu</div>
                                <div>
                                    <img src={location} alt="" />
                                </div>
                            </div>

                            <hr />
                            <div className="dialog-header flex-row flex-align-center flex-space-between ml-16 mr-16 disabled">
                                <div>Accessibilité</div>
                                <div>
                                    <img src={down_arrow} alt="" />
                                </div>
                            </div>

                            <hr />
                            <div className="dialog-header flex-row flex-align-center flex-space-between ml-16 mr-16 disabled">
                                <div>Paramètres avancés</div>
                                <div>
                                    <img src={down_arrow} alt="" />
                                </div>
                            </div>

                            <hr />
                        </div>
                    </section>
                </form>
            </div>
        </DialogComponent>
    );
};

export default CreatePostDialog;
