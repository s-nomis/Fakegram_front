import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/features/searchSlice";
import LoadingSpinner from "../LoadingSpinner";
import SearchResult from "./SearchResult";

import searchIcon from "../../assets/icons/search.png";

const SearchNav = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const { users } = useSelector((state) => state.search);

    useEffect(() => {
        if (input.length > 0) {
            setIsLoading(true);
        }

        const delayedDebounceFn = setTimeout(() => {
            dispatch(search(input));
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(delayedDebounceFn);
    }, [input]);

    return (
        <div className="nav-search-container">
            <div className="nav-search-input-container">
                {!showResult && (
                    <div className="icon">
                        <img src={searchIcon} alt="" className="filter-gray" />
                    </div>
                )}
                <input
                    type="text"
                    placeholder="Rechercher"
                    className="input-search"
                    onFocus={() => setShowResult(true)}
                    onBlur={() =>
                        input.length === 0 ? setShowResult(false) : undefined
                    }
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            {showResult && input.length > 0 && (
                <div className="nav-search-result-container">
                    <div
                        className="fullscreen"
                        onClick={() => setShowResult(false)}
                    ></div>
                    <div className="nav-dialog">
                        <div className="arrow arrow-center"></div>

                        <div className="nav-search-result flex-col">
                            {isLoading ? (
                                <div className="flex-row flex-center width-100 height-100">
                                    <LoadingSpinner />
                                </div>
                            ) : users.length > 0 ? (
                                users.map((result) => (
                                    <SearchResult
                                        key={result._id}
                                        user={result}
                                    />
                                ))
                            ) : (
                                <div className="flex-row flex-center width-100 height-100 text-medium gray">
                                    Aucun résultat.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchNav;
