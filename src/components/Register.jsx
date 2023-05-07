//Importing react and RegisterTest function
import React from "react";
import RegisterTest from "../registerTest";

//Creating a Register constant with a function
const Register = () => { 
    //Returning the contents of Register onto the webpage
    return (
        //Setting the div background color and including RegisterTest on the page
        <div className=" bg-[#E1FAF5] ">
            <RegisterTest />
        </div>
    )

 }

 //Exporting the Register Constant as default
 export default Register 