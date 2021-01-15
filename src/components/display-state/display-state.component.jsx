import React from "react";

const DisplayState = (props) => (
    <p>
        {props.function(props.agruments)}
    </p>
);

export default DisplayState;