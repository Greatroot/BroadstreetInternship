import React from "react";
import Image from "./Image";

export const componentMappings = {
    img: (content) => <Image {...content} /> // content: { src, alt } strings.
};