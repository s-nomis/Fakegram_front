import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/fr";

const PostDate = ({ date }) => {
    const displayDate = () => {
        dayjs.locale("fr");
        dayjs.extend(relativeTime);

        const now = new Date();
        return dayjs(date).from(now);
    };

    return <div className="date-container">{displayDate().toUpperCase()}</div>;
};

export default PostDate;
