import "./cards.scss";
import * as React from "react";

const Cards = (props) => {

    const renderCategorieIcon = () =>{
        if (props.categorie == 'food'){
            return <i className="fas fa-utensils"></i>;
        } else if (props.categorie == 'dietician'){
            return <i className="far fa-clipboard"></i>;
        } else if (props.categorie == 'opinion' ){
            return <i className="far fa-comment"></i>;
        }
    };

    return(
       // <div className='cardsContainter' >
        <div className={`cardsContainter ${props.backgroundBronze}` }>
           <div className={`categorie ${props.categorie}`}></div>
           {
               renderCategorieIcon()
           }
           <h1>{props.title} {props.naam}</h1>
           <p>{props.question}</p>


           <div className="displayNone" >
               <div className="score">{props.score}<br></br>Goed</div>
               <div className="test3"><img src={props.scoreImage} alt="image1"></img></div>
           </div>
       </div>
    );
};

export default Cards;
