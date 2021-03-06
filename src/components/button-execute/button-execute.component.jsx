import React from "react";

import "./button-execute.styles.scss";

const ButtonExecute = (props) => (
    <div className="button-round" onClick={props.pushFunction}>
        <span>{props.text}</span>
    </div>
);

export default ButtonExecute;