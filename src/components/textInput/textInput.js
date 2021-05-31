import "./textInput.scss";
import * as React from "react";

const TextInput = (props) => {

    return(
        <form action="/action_page.php">
            <input type="text" id="usersName" name="usersName" placeholder={`${props.placeholder}`}></input>
        </form>
    );
};

export default TextInput;
