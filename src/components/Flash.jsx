//Importing react and importing the FlashcardTest Function
import React from "react";
import FlashcardTest from "../flashcardTest";


//Creating a Flash constant with a function
const Flash = () => {
    //returns the FlashcardTest function on the webpage
    return (
        //Using tailwind to set the background colour
        <div className="bg-[#E1FAF5]">
            <FlashcardTest />
        </div>
    )
}

//Exporting the Flash constant function
export default Flash;