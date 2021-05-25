import "./modal.scss";
import Onboarding from "../onboarding/onboarding";
import Image from "../../image/image1.png";
import * as React from "react";
import ButtonColored from "../buttonColored/buttonColored";

const Modal = (props) => {

    if (props.active) {
        return(
            <div className='test'>
                <div className='modalCard'>
                    <Onboarding image={Image} title='Weten wat een dietist voor jou kan betekenen?' text='Ruim 10% (1.7 miljoen mensen) van de Nederlandse bevolking heeft chronische nierschade. 40% (680.000 mensen) daarvan weet dat niet.'/>

                    <ButtonColored text='Sluiten' setActive={props.setActive} />
                </div>

                <div className='modalContainer'></div>
            </div>
        );
    }
    else return null;

};

export default Modal;
