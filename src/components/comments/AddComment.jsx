import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import autosize from "autosize";
import EmojiPicker from "./EmojiPicker";
import { addComment } from "../../redux/features/commentsSlice";

import smile from "../../assets/icons/smile.png";

const AddComment = ({ postId }) => {
    const dispatch = useDispatch();

    const textarea = useRef(null);
    const [comment, setComment] = useState("");

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
        setComment(text);

        const newCursor = cursor + emoji.length;
        setTimeout(() => {
            textarea.current.setSelectionRange(newCursor, newCursor);
            textarea.current.focus();
        }, 10);
    };

    const submitOnEnter = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            //Touche Entrée
            e.preventDefault();
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        const data = {
            content: comment,
        };

        dispatch(addComment({ postId, data }));
        setComment("");
    };

    useEffect(() => {
        autosize(textarea.current);
    }, []);

    return (
        <div className="comment-container flex-row flex-align-center g-10">
            <div
                className="icon"
                onClick={() => setVisibleEmojiPicker(!visibleEmojiPicker)}
            >
                <img src={smile} alt="" />
            </div>

            <textarea
                className="comment-input"
                placeholder="Ajouter un commentaire..."
                rows={1}
                value={comment}
                ref={textarea}
                onKeyDown={submitOnEnter}
                onChange={(e) => setComment(e.target.value)}
            />

            <button
                className={
                    "btn btn-tertiary fw-600" + (!comment ? " disabled" : "")
                }
                disabled={!comment ? true : false}
                onClick={handleSubmit}
            >
                Publier
            </button>

            {visibleEmojiPicker && (
                <div className="emoji-keyboard keyboard-up">
                    <EmojiPicker
                        perLine={7}
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
    );
};

export default AddComment;
