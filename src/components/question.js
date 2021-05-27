//useParams = parameters gebruiken
import {useParams} from "react-router-dom"
import ButtonColored from "./buttonColored/buttonColored";
import React from "react";
import ButtonBorder from "./buttonBorder/buttonBorder";

const Question = (props) => {

    const renderQuestions = (pageNumber) => {
        switch (pageNumber){
            case '1':
                return (
                    <>
                        <h2>Voordat we beginnen, wat is je naam?</h2>
                        {/*HIER MOET DE INPUT nNAAM COMPONET KOMEN*/}
                        <ButtonColored text='Pagina 1' link='2'/>
                    </>
                    );
            case '2':
                return (
                    <>
                        <h2>Welke aandoening is  relevant voor jou?</h2>
                        <ButtonBorder text='Nierfalen'/>
                        <ButtonBorder text='Diabetus'/>
                        <ButtonBorder text='COPD'/>
                        <ButtonBorder text='Hart- en vaatziekten'/>
                        <ButtonColored text='pagina 2' link='3'/>
                    </>
                );
            default:
                return <ButtonColored text='Pagina default'/>
        }
    };

    let { number } = useParams();

    return(
    <>
        {renderQuestions(number)}
    </>
    );
};

export default Question;