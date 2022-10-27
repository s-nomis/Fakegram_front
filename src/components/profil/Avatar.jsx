import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAvatar } from "../../redux/features/authSlice";
import EditAvatarDialog from "../dialog/EditAvatarDialog";

const Avatar = ({ children, avatar }) => {
    const dispatch = useDispatch();

    const [displayDialog, setDisplayDialog] = useState(false);

    const isDefaultAvatar = () => {
        return avatar.includes("default-avatar");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("avatar", e.target.files[0]);

        dispatch(updateAvatar(form));
    };

    return (
        <>
            <div onClick={() => setDisplayDialog(true)}>
                <label htmlFor="avatar-input">{children}</label>

                {isDefaultAvatar() && (
                    <form>
                        <input
                            id="avatar-input"
                            type="file"
                            className="hidden"
                            onChange={handleSubmit}
                        />
                    </form>
                )}
            </div>

            {!isDefaultAvatar() && displayDialog && (
                <EditAvatarDialog displayDialog={setDisplayDialog} />
            )}
        </>
    );
};

export default Avatar;
