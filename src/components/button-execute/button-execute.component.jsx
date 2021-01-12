import React from "react";

import "./button-execute.styles.scss";

const ButtonExecute = (props) => (
    <a href="https://sankti.github.io/opole/index.html">
        <div className="button-round" onClick={props.pushFunction}>
            Pokaż wyniki
        </div>
    </a>
);

export default ButtonExecute;