import "./question.scss";

import React, {useCallback, useContext, useState} from "react";
import Cards from "./cards/cards";
import ButtonRound from "./buttonRound/buttonRound";
import Modal from "./modal/modal";

const Question = (props) => {
    const [active, setActive] = useState(false);
    const [checker, setChecker] = useState(false);




    const checkQuestion = (answer) =>  {
        // console.log(answer);
        // console.log(props.post.acf.questionchecker);

        //Checkt hoeveel vragen er goed zijn
        if(answer === props.post.acf.questionchecker){
            setChecker(true);
            props.setScore (props.score +1)
        } else{
            setChecker(false);
        }

        setActive(true);
    };




    return (
        <>
            <div className='cardsBackground'></div>

            <div className='cardsWrapper'>
                {/*data ophalen en invoeren -> {post.acf.titel}*/}
                <Cards categorie='dietician' title={props.post.acf.titel} question={props.post.acf.question}/>
                <div className='cardsBelow'></div>
            </div>

            {/*model*/}
            <Modal active={active} setActive={setActive} title={checker?props.post.acf.modaltitelgood:props.post.acf.modaltitelfault} text={checker?props.post.acf.modaltextgood:props.post.acf.modaltextfault} buttonLink={ props.renderQuestion}  />

            <div className='roundButtonBackground'></div>

            <div className='buttonWrapper'>
                <ButtonRound background='greenBackground' type='yes' checkQuestion={checkQuestion} answer={true}/>
                <ButtonRound background='redBackground' type='no' checkQuestion={checkQuestion}  answer={false}/>
                }/>
            </div>
        </>
    );
};

export default Question;