import React from "react";

const DisplayArray = (props) => (
    <>
        {props.array.join(", ")}
    </>
);

export default DisplayArray;