import React from "react";

import "./button-execute.styles.scss";

const ButtonExecute = (props) => (
    <div className={props.className} onClick={props.pushFunction}>
        {props.text}
    </div>
);

export default ButtonExecute;