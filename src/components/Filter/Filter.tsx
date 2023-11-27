import React from "react";
import "./Filter.css";

interface Props {
    show: boolean;
}

function Filter({ show }: Props) {
    console.log("show", show);
    return (
        <div
            id="filterComponent"
            className={show ? "showFilter" : "hideFilter"}
        >
            <span>
                <b>Price</b>
            </span>
            <span>
                <b>Rate</b>
            </span>
        </div>
    );
}

export default Filter;
