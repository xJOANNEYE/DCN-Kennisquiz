import "./buttonBorder.scss";

const ButtonBorder = (props) => {
    return(
        <div className='buttonBorderContainer'> <i className="fas fa-anchor"></i> {props.text} </div>
    );
};

export default ButtonBorder;
