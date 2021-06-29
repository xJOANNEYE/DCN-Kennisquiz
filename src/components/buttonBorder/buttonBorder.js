import "./buttonBorder.scss";

const ButtonBorder = (props) => {
    return(
        <div className={`buttonBorderContainer ${props.disease === props.text.toLowerCase() && 'active'}`} onClick={() => props.setDisease(props.text.toLowerCase())}> {props.text} </div>
    );
};

export default ButtonBorder;


