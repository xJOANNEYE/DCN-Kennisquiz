import "./question.scss";

//useParams = parameters gebruiken
import {useParams} from "react-router-dom"
import ButtonColored from "./buttonColored/buttonColored";
import React, {useContext} from "react";
import ButtonBorder from "./buttonBorder/buttonBorder";
import TextInput from "./textInput/textInput";
import Cards from "./cards/cards";
import ButtonRound from "./buttonRound/buttonRound";
import Modal from "./modal/modal";
import Image from "../image/slingers.png"
import {ApiContext} from "../apiContextProvider";

const Question = (props) => {
    const [active, setActive] = React.useState(false);

    const renderQuestion = Math.floor(Math.random() * 10) + 1;

    console.log(props.post);
    return (
        <>
            <div className='cardsBackground'></div>

            <div className='cardsWrapper'>
                {/*data ophalen en invoeren -> {post.acf.titel}*/}
                <Cards categorie='dietician' title={props.post.acf.titel} question={props.post.acf.question}/>
                <div className='cardsBelow'></div>
            </div>

            <Modal active={active} setActive={setActive} title={props.post.acf.modaltitelfault} text={props.post.acf.modaltextfault} buttonLink={renderQuestion} />

            <div className='roundButtonBackground'></div>

            <div className='buttonWrapper' onClick={() => setActive(true)}>
                <ButtonRound background='greenBackground' type='yes' onClick={() => setActive(true)}/>
                <ButtonRound background='redBackground' type='no' onClick={() => setActive(true)}/>
            </div>
        </>
    );
};

export default Question;