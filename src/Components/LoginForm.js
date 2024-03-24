import React from "react";
// import "./GratsButton.css";
import './LoginForm.css';

const LoginForm=({title,placeholder,titleClass,text})=>{
    return(
        <form>  
        <div className="container1">
            <div className="text-field">
            <input type={text} placeholder={placeholder} className={titleClass ? titleClass:"Text-input"} >{title}</input>
            </div>
            </div>

            </form>
            
    )
}
export default LoginForm;