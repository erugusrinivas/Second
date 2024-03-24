import React from "react";
import "./GratsButton.css";
const GratsButton = ({handleOnClick,title,color}) => {
    // const {title} = props
    // const userDetails={
    //     username:"srinivas",
    //     mobile:"7815867946",
    //     email:"srinivaserugu9887@gmail.com"
    // }
    // const{username,mobile,email}=userDetails
    // console.log(username);\

    // const handleOnClick = () => {
    //     console.log('clicked');
    // }
    return (
        <div onClick={handleOnClick} className="container">
            <div className={`btn btn-${color}`}>{title}</div>
        </div>
    )
}
export default GratsButton;