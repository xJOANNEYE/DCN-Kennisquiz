import "./buttonColored.scss";
import {Link} from 'react-router-dom'

const ButtonColored = (props) => {
    return(
        <Link to={`/question/${props.link}`}>
            <div className='buttonColoredContainer' style={{backgroundColor:props.background, color:props.color }} > {props.text}</div>
        </Link>
    );
};

export default ButtonColored;
