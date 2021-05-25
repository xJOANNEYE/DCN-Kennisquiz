import "./buttonColored.scss";

const ButtonColored = (props) => {
    return(
        <div className='buttonColoredContainer' onClick={()=> props.setActive(false)} > {props.text} </div>
    );
};

export default ButtonColored;
