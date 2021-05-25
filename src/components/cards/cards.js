import "./cards.scss";
import * as React from "react";

const Cards = (props) => {

    //hier moet je functies maken
    // else if == dubbel check
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
       <div className='cardsContainter'>
           <div className={`categorie ${props.categorie}`}></div>
           {
               renderCategorieIcon()
           }

           <h1>{props.title}</h1>
           <p>{props.question}</p>
           <div className='cardsBelow'></div>
       </div>
    );
};

export default Cards;
