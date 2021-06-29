import "./buttonColoredAgain.scss";
import {Link} from 'react-router-dom'

const ButtonColoredAgain = (props) => {
    return(
        <a href="https://dietist.org/" target="_blank"><div className='buttonColoredContainer' style={{backgroundColor:props.background, color:props.color }} > {props.text}</div></a>
    );
};

export default ButtonColoredAgain;
