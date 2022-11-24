import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAvatar } from "../../redux/features/authSlice";
import EditAvatarDialog from "../dialog/EditAvatarDialog";

const Avatar = ({ children, avatar }) => {
    const dispatch = useDispatch();

    const { loading, user } = useSelector((state) => state.auth);

    const [displayDialog, setDisplayDialog] = useState(false);

    const isDefaultAvatar = () => {
        return avatar.includes("default-avatar");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("avatar", e.target.files[0]);

        dispatch(updateAvatar({ userId: user._id, data: form }));
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
