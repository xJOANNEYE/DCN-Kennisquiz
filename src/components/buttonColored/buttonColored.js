import "./buttonColored.scss";
import {Link} from 'react-router-dom'

const ButtonColored = (props) => {
    return(
        <Link onClick={()=> props.setActive && props.setActive(false)} to={`/question/vraag-${ props.link}`}>
            <a href="https://dietist.org/" target="_blank"><div className='buttonColoredContainer2' style={{backgroundColor:props.background, color:props.color }} > {props.text}</div></a>
        </Link>
    );
};

export default ButtonColored;
