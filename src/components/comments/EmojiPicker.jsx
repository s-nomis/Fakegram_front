import React, { useEffect, useRef } from "react";
import { Picker } from "emoji-mart";
import data from "@emoji-mart/data";

const EmojiPicker = (props) => {
    const ref = useRef();

    useEffect(() => {
        new Picker({ ...props, data, ref });
    }, []);

    return <div ref={ref} />;
};

export default EmojiPicker;
