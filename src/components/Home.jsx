//Importing react 
import React from "react";
import Test from "../assests/pexels-pixabay-301920 (1).jpg"


//Creating a Home constant with a function
const Home = () => {
    //returns the Home page to the webpage
    return (
        //Using tailwind to set the width height and background
        <div name="home" className="w-screen h-screen bg-[#E1FAF5]">

            <div className=" absolute mt-24 ml-72 pl-[400px] pr-[400px] pt-[20px] pb-[20px]  text-4xl text-green-500 bg-white rounded-md"> <h3>TriLearn</h3></div>
            {/* Using tailwind to set padding top to 36 and margin on x axis to 56 and padding on the x-axis to 8
             and setting flex flex col and justify content in the center and setting height to max */}
            <div className=" pt-36 mx-56 px-8 flex flex-col justify-center h-full">
                
                {/* Using tailwind to set the width to 1000px and height to 400px and padding top to 10 and padding left to 20
                    padding right to 20 and backgroudn to white with rounded xl corners */}
                <div className="w-[1000px] h-[400px] pt-10 pl-20 pr-20 bg-white rounded-xl">

                    {/* Using tailwind to set the width to 200px  
                        and the borders to rounded xl and setting overflow hidden */}
                    <div className="w-[200px] rounded-xl overflow-hidden"><img src ={Test}/></div>
                        {/* Using tailwind to set the text to xl and the text colour to green */}
                        <p className="text-xl text-green-500">
                                Trilearn is designed to help students learn easily and smarter, our goal is to allow students with an easy to access methhod of studying. To do this we offer affordable access to a create your own flashcard system, students can easily select the questions they want to enhance their knowledge on and return to their study sets at any time.
                                
                        
                        </p>
                    {/* Using tailwind to set the text to xl and the text colour to green */}        
                    <div className="text-xl pt-5 text-green-500">
                        <p>
                            Trilearn is currently in its alpha stage and is open to all users free of charge
                        </p>
                    </div>
                        
                        
                </div>
                       
            </div>

        </div>
    )
}

//Exporting the Home constant
export default Home