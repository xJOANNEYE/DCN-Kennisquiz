import "./buttonBorderAgain.scss";
import {Link} from "react-router-dom";

const ButtonBorderAgain = (props) => {
    return(
        <Link to={ props.link}>
            <div className="buttonBorderAgainContainer"> {props.text} </div>
        </Link>
    );
};

export default ButtonBorderAgain;


