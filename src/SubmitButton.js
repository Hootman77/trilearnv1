//Importing react from react
import React from "react";
//Importing link from react-router-dom
import { Link } from "react-router-dom";


//Creating a Submitbutton class which extends from a react component
class SubmitButton extends React.Component {
  //Populates the page using the render method
  render() {
    return (
      //Creating a div with padding top of 8 and padding left of 20
      <div className="pt-8 pl-20 ">
        {/* Creating a button with type text, width 250px height 45px, setting a background colour and
            padding top of 0 and rounded corners 2xl padding right of 9 and padding left of 9
            with text center */}
        <button
          type="text"
          className="w-[250px] h-[45px] bg-[#80B07E] pt-0 rounded-2xl pr-9 pl-9 text-center  "
         
          
        >
        {/* Updating the text of the button using reacts props function, this takes values from elsewhere 
            and updates the text on a case by case bases*/}  
        {this.props.text}
        </button> 
          
      </div>
  
  );
  }
  
}

//Creating a Registerbutton class which extends from a react component
class RegisterButton extends React.Component {
  //Populates the page using the render method
  render() {
    return (
      //Creating a div with padding top of 8 and padding left of 20
      <div className="pt-8 pl-28">
        
        {/* Using the react-router link function to link to the Register page */ }
          <Link to="/Register">
            {/* Creating a button with type text, width 175px height 45px, setting a background colour and
            padding top of 0 and rounded corners 2xl padding right of 9 and padding left of 9
            with text center */}
            <button
            type="button"
            className="w-[175px] h-[45px] bg-[#80B07E] pt-0 rounded-2xl pr-9 pl-9 text-center "
            /* Using the onClick function to print to console */
            onClick={console.log  
            }
            >
            {/* Updating the text of the button using reacts props function, this takes values from elsewhere 
            and updates the text on a case by case bases*/}  
            {this.props.text}
          

          
          </button>
        </Link>
       
         
          
      </div>
  
  );
  }
  
}


//Exporting both the submitbutton and registerbutton
export {
  SubmitButton,
  RegisterButton
}

      
    

