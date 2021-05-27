import "./container.scss";
import React from "react";
import NavOpen from "../navOpen/navOpen";
import Nav from "../nav/nav";

const Container = ({children}) => {

    //state = een soort variable die hij bij zich heeft waar je iets mee kan doen. Een stukje data in zijn eigen component
    const [open, setOpen] = React.useState(false);

    return(
     <div className='test'>
         <NavOpen open={open} setOpen={setOpen}/>
         <Nav open={open} setOpen={setOpen}/>
         {children}
     </div>
    );
};

export default Container;