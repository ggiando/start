import React, { useState } from "react";

import "./Login.css"

function Login () {
    const [values, setValues] = useState({})

    function submit(e) {
        e.preventDefault();
        console.log("ciao");
    }

    function handleChange(event) {
        console.log(event);
    }
return(
    <div className="Container">
        <form onSubmit={submit}>
            <div>
                <label>Username</label>
                <input name="username" type="text" onChange={event => handleChange(event)}/>
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password"/>
            </div>
            <button type="submit" >submit</button>
        </form>
    </div>
);
}

export default Login

