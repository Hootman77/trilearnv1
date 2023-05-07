//Import React and useState from react
import React, { useState } from "react";
//Importing Logo 
import Logo from "../assests/Logo.png"
//Importing icons from react-icons
import {FaBars, FaTimes} from "react-icons/fa"

//Creating a Navbar constant with a function
const Navbar = () => {
    //Setting a constant of nav/setNav using the useState function and setting it to false
    const [nav, setNav] = useState(false);
    //Creating a handle click constant function 
    const handleClick = () => {
        //Setting nav to the opposite of navs value
        setNav(!nav);
    }

    //Populating the page with the return method
    return (
        //Creating a div class and using tailwind to set the contents to fixed, the width to full, the height to 80px, setting the position to flex, 
        //justifying content between and centering the items, setting the padding on x to 2 and the background colour to a variant 
        <div className='fixed w-full h-[80px] flex justify-between items-center px-2 bg-gradient-to-r from-[#4E824C] to -{#274126} '> 
            {/* Main Menu */}
            
                {/* Setting the width to 75px and margin top to 0 and inserting the logo image */}
                <div className="w-[75px] mt-0"><img src ={Logo}/></div>
                    {/* Setting the ul to hidden when width is less than medium, display flex and over medium flex grow, flex-row to align content in a line 
                    and reverse the flow of flex, setting space the child elements  */}
                    <ul className="hidden flex md:flex md:flex-grow flex-row  flex-row-reverse space-x-1 space-x-7">
                    
                      
                        
                        {/* Setting li to padding right of 10 */}
                        <li className="pr-10"><a href="/Login">Login</a></li>
                        <li className="pr-10"><a href="/Register">Register</a></li>
                        <li><a href="/Study">Create Quiz</a></li>
                        <li><a href="/Flash">Flash cards</a></li>
                        <li><a href="/">Home</a></li>
                        
                    </ul>
         

            {/* Menu Icon
                Setting the div to run the handleClick function on click abd setting this to only display if width of browser is less thand medium
                and setting the z axis to 10 */}
            <div onClick={handleClick} className="md:hidden z=10">
                {/* If the nav is false then the FaBars will show or if its true the FaTimes will show  */}
                {!nav ? <FaBars /> : <FaTimes  />}
            </div>

            {/* Mobile Menu
                If the nav is false the menu will be hidden, otherwise the links will appear on the screen
                using tailwind to set the position to absolute top-0 left-0 and width to full height to screen and setting
                background colour, and the display to flex, flex col and justifying content to center and items to center
            */}

            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#E1FAF5] flex flex-col justify-center items-center"}>
                {/* Setting the padding of y axis to 4 and text size to 4xl */}
                <li className="py-4 text-4xl"><a href="/register">Register</a></li>
                <li className="py-4 text-4xl"><a href="/login">Login</a></li>
                <li className="py-4 text-4xl"><a href="/study">Study Area</a></li>
                <li className="py-4 text-4xl"><a href="/">Home</a></li>
                
            </ul>       

        </div>
    )
}


//Exporting the Navbar constant as default
export default Navbar;