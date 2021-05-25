import "./buttonRound.scss";
import * as React from "react";

const ButtonRound = (props) => {

    return(
        <button className={`buttonRoundContainer ${props.background}`}>
            {
                //ternary operator (conditional renderen) nooit nesten!!!
                props.type === 'yes'? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>
            }
        </button>
    );
};

export default ButtonRound;
