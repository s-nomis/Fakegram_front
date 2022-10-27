import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearSearch } from "../../redux/features/searchSlice";

const SearchResult = ({ user }) => {
    const dispatch = useDispatch();

    return (
        <Link
            to={`/${user.username}`}
            onClick={() => dispatch(clearSearch())}
            className="search-result-container"
        >
            <div>
                <img
                    src={user.avatar}
                    alt=""
                    className="avatar search-avatar"
                />
            </div>

            <div className="flex-col">
                <div className="fw-600">{user.username}</div>
                {user.fullname && <div className="gray">{user.fullname}</div>}
            </div>
        </Link>
    );
};

export default SearchResult;
