import "./nav.scss";
import * as React from "react";

const Nav = (props) => {

    return (
        <div className='navWrapper'>
            <h3> DCN </h3>
            <i className="fas fa-bars"  onClick={() => props.setOpen(true)}></i>
        </div>
    );
};

export default Nav;
