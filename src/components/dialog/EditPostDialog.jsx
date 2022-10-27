import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../redux/features/postSlice";
import EmojiPicker from "../comments/EmojiPicker";
import DialogComponent from "./DialogComponent";

import smile from "../../assets/icons/smile.png";
import location from "../../assets/icons/location.png";
import down_arrow from "../../assets/icons/down-arrow.png";

const EditPostDialog = ({ post, displayEditDialog }) => {
    const dispatch = useDispatch();
    const textarea = useRef(null);

    const [description, setDescription] = useState(post.description);
    const [visibleEmojiPicker, setVisibleEmojiPicker] = useState(false);

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

        const data = {
            description,
        };

        dispatch(updatePost({ postId: post._id, data }));
        displayEditDialog(false);
    };

    return (
        <DialogComponent displayDialog={displayEditDialog}>
            <div
                className="xxl-container dialog-container"
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={handleSubmit}>
                    <section className="dialog-header flex-row flex-align-center flex-space-between pl-16 pr-16">
                        <button
                            className="btn btn-dialog"
                            onClick={() => displayEditDialog(false)}
                        >
                            Annuler
                        </button>

                        <h4 className="fw-600">Modifier les infos</h4>

                        <button
                            type="submit"
                            className="btn btn-tertiary fw-600"
                        >
                            Terminé
                        </button>
                    </section>
                    <hr />

                    <section className="flex-row">
                        <div className="dialog-post-img">
                            <img
                                src={post.image}
                                alt=""
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="dialog-post-infos">
                            <div className="ml-16">
                                <div className="flex-row g-12 mt-18 mr-16 mb-14">
                                    <img
                                        src={post.owner.avatar}
                                        alt=""
                                        className="avatar"
                                        width={28}
                                    />
                                    <h4 className="mt-4 fw-600">
                                        {post.owner.username}
                                    </h4>
                                </div>

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
        // <div className="edit-dialog">
        //     <div className="edit-container">
        //         <div className="modal-container">
        //             <form onSubmit={handleSubmit}>
        //                 <section className="post-content">
        //                     <div className="infos">
        //                         <div className="description">
        //                             <div className="post-owner">
        //                                 <img
        //                                     src={post.owner.avatar}
        //                                     alt=""
        //                                     width={28}
        //                                 />
        //                                 <h4>{post.owner.username}</h4>
        //                             </div>

        //                             <textarea
        //                                 name="description"
        //                                 className="post-description"
        //                                 placeholder="Ajouter une légende..."
        //                                 value={description}
        //                                 ref={textarea}
        //                                 onChange={(e) =>
        //                                     setDescription(e.target.value)
        //                                 }
        //                             ></textarea>

        //                             <div className="emoji">
        //                                 <div
        //                                     className="emoji-picker"
        //                                     onClick={() =>
        //                                         setVisibleEmojiPicker(
        //                                             !visibleEmojiPicker
        //                                         )
        //                                     }
        //                                 >
        //                                     <img src={smile} alt="" />
        //                                 </div>

        //                                 {visibleEmojiPicker && (
        //                                     <div className="emoji-keyboard">
        //                                         <EmojiPicker
        //                                             perLine={6}
        //                                             locale="fr"
        //                                             navPosition="none"
        //                                             previewPosition="none"
        //                                             searchPosition="none"
        //                                             skinTonePosition="none"
        //                                             theme="light"
        //                                             onEmojiSelect={onEmojiClick}
        //                                         />
        //                                     </div>
        //                                 )}
        //                             </div>
        //                         </div>

        //                         <hr />

        //                         <div className="bandeau disabled">
        //                             <div>Ajouter un lieu</div>
        //                             <div>
        //                                 <img src={location} alt="" />
        //                             </div>
        //                         </div>

        //                         <hr />

        //                         <div className="bandeau disabled">
        //                             <div>Accessibilité</div>
        //                             <div>
        //                                 <img src={down_arrow} alt="" />
        //                             </div>
        //                         </div>

        //                         <hr />

        //                         <div className="bandeau disabled">
        //                             <div>Paramètres avancés</div>
        //                             <div>
        //                                 <img src={down_arrow} alt="" />
        //                             </div>
        //                         </div>

        //                         <hr />
        //                     </div>
        //                 </section>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
};

export default EditPostDialog;
