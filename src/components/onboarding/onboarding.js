import "./onboarding.scss";

const Onboarding = (props) => {
    return(
        <div className='onboardingContainer'>
            <img src={props.image} alt="image1"></img>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
};

export default Onboarding;
