import "./button.scss";

const Button = (props) => {

  return(
      <button className='buttonContainer'>{props.text} <i className="fas fa-arrow-right"></i></button>
  );
};

export default Button;
