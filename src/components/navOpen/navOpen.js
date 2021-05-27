import "./navOpen.scss";
import * as React from "react";
import ButtonColored from "../buttonColored/buttonColored";

const NavOpen = (props) => {

    if (props.open) {
        return(
            <div className='navOpenContainer'>
                <i className="fas fa-times" onClick={() => props.setOpen(false)}></i>

                <div className='navOpenOptions'>
                    <h2>Terug naar de vragen</h2>
                    <h2>Over het product</h2>
                    <h2>Contactgegevens</h2>
                </div>

                <div class='buttonNavOpen'>
                    <ButtonColored text='Zoek een passende dietist' background='#ffffff' color='#0E656C'/>
                </div>

            </div>
        );
    } else return null;
};

export default NavOpen;
