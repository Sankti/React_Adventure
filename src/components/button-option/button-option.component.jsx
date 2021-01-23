import React from "react";

import "./button-option.styles.scss";

const ButtonOption = (props) => (
    <div id={props.id} className={"button-check " + props.state.gumtree} onClick={props.pushFunction}>
        <span>{props.text}</span>
    </div>
);

export default ButtonOption;