import "./navOpen.scss";
import * as React from "react";
import ButtonColored from "../buttonColored/buttonColored";
import {Link} from "react-router-dom";
import ButtonColoredWhite from "../buttonColoredWhite/buttonColoredWhite";

const NavOpen = (props) => {

    if (props.open) {
        return(
            <div className='navOpenContainer'>
                <i className="fas fa-times" onClick={() => props.setOpen(false)}></i>

                <div className='navOpenOptions'>
                    <Link to={'/'}>  <h2>Terug naar de vragen</h2></Link>
                    <Link to={'/about'}><h2>Over het product</h2></Link>
                    <Link to={'/contact'}><h2>Contactgegevens</h2></Link>
                </div>

                <div class='buttonNavOpen'>
                    <a href="https://dietist.org/" target='_blank'><ButtonColoredWhite text='Zoek een passende dietist'/></a>
                </div>

            </div>
        );
    } else return null;
};

export default NavOpen;
