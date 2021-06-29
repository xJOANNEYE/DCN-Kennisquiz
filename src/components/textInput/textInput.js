import "./textInput.scss";
import * as React from "react";

const TextInput = (props) => {

    console.log(props.name);

    return(
        <form>
            <input autoComplete="off" onChange={event => props.setName(event.target.value)} type="text" id="usersName" name="usersName" placeholder={`${props.placeholder}`}></input>
        </form>
    );
};

export default TextInput;
