//Importing React and LoginForm function 
import React from "react";
import LoginForm from "../loginForm";


//Creating a Login constant with a function
const Login = () => {
    //returns the Login page with the LoginForm included to the webpage
    return (
        //Using tailwind to set the background colour
        <div className="bg-[#E1FAF5]">
            <LoginForm /> 
        </div>     
    )
}

export default Login