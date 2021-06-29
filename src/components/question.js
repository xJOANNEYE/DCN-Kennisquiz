import "./question.scss";

import React, {useCallback, useContext, useState} from "react";
import Cards from "./cards/cards";
import ButtonRound from "./buttonRound/buttonRound";
import Modal from "./modal/modal";

const Question = (props) => {
    const [active, setActive] = useState(false);
    const [checker, setChecker] = useState(false);

    const checkQuestion = (answer) =>  {
        props.setCount(props.count +1);
        if(answer === props.nierFalen.acf.questionchecker){
            setChecker(true);
            props.setScore (props.score +1)
        } else{
            setChecker(false);
            props.forceUpdate()
        }
        setActive(true);
    };

    return (
        <>
            <div className='cardsBackground'></div>

            <div className='cardsWrapper'>
                <Cards categorie={props.nierFalen.acf.categorie} title={props.nierFalen.acf.titel} question={props.nierFalen.acf.question}/>
                <div className='cardsBelow'></div>
            </div>

            <Modal checker={checker} oanswer={true} active={active} setActive={setActive} title={checker ? props.nierFalen.acf.modaltitelgood : props.nierFalen.acf.modaltitelfault} text={checker ? props.nierFalen.acf.modaltextgood : props.nierFalen.acf.modaltextfault} buttonLink={ props.renderQuestion}  />

            <div className='roundButtonBackground'></div>

            <div className='buttonWrapper'>
                <ButtonRound background='greenBackground' type='yes' checkQuestion={checkQuestion} answer={true}/>
                <ButtonRound background='redBackground' type='no' checkQuestion={checkQuestion}  answer={false}/>
            </div>
        </>
    );
};

export default Question;