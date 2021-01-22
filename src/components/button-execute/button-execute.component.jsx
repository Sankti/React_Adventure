import React from "react";

import "./button-execute.styles.scss";

const ButtonExecute = (props) => (
    <div className="button">
        <div className={"button " +props.className} onClick={props.pushFunction}>
            {props.text}
        </div>
    </div>
);

export default ButtonExecute;