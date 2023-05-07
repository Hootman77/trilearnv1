//Importing react and CreateQuiz function
import React from "react";
import CreateQuiz from "../createQuiz";

//Creating a Study constant with a function
const Study = () => {
    //Returning the contents of Sutdy onto the webpage
    return (
        //Setting the div background color and including CreateQuiz on the page
        <div className="bg-[#E1FAF5]">
            <CreateQuiz />
        </div>
    )
}

//Exporting the constant Study as default
export default Study;