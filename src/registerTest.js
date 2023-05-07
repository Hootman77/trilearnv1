//Importing React, useState from react
import React, {useState} from 'react'
//Importing useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";

//Exporting and creating a Register function function
export default function () {


    //Creating a constant naviget which uses the useNavigate function from react router dom  
    const naviget = useNavigate();

    //Using useState to create constants 
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    

    //Creating a constant function that inputs event and type
    const handleChange = (event, type) => {
      //Calling the switch function to determine the type of case to be called
      switch(type){

        //If type is user then execute this
        case "user":
          //set error to empty string
          setError("");
          //set user value to the value of the event target
          setUser(event.target.value);
          console.log(user)
          //If the value within the event is zero then run this if statement
          if(event.target.value === ""){
            //Set error to username is required
            setError("Username is required");
          
          } 
          //Break this if statement
          break;
        
        //If type is pass then execute this
        case "pass":
          //Set error to empty string
          setError("");
          //Set pass value to the value of the event target
          setPass(event.target.value);
          console.log(pass)
          //If the value within the event is zero then run this if statement
          if(event.target.value === ""){
            //Set error to password is required
            setError("Password is required");
          
          } 
          //Break this if statement
          break;
      }
      
    }
    //Creating a function called handleSubmit which inputs the event data
    function handleSubmit(event){
      //Prevents the page from defaulting after an event has occurred
        event.preventDefault();
          //If user and pass are not empty then run this if statement
        if(user !== "" && pass !== ""){
          //creating a variable called url with the value of the api link
            var url = "https://trilearnv1.herokuapp.com/index3.php";
            //Creating a variable called headers with the value of the headers
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            //Creating a variable called data, with the user and pass values
            var Data = {
                user: user,
                pass: pass
            }
            //Calling the fetch function send a post request to the url with the data mentioned above
            fetch(url, {
                method: "POST",
                headers: headers,
                //Stringing the data in json format
                body: JSON.stringify(Data)

            })//Calling the .then function to get the response and setting the response in json format
            .then((response) => response.json())
            //Calling the .then function to take that response and carry out a function
            .then((response) => {
              //Calling an if statement to check if the username is already in use
              if(response[0].result === "Username already in use"){
                //If satetement is the same set error "Username is already in use"
                setError(response[0].result)
              } //Other wise run this statement
              else {
                //Set message to "login successfully"
                setMsg(response[0].result);
                //Call the timeou function to 3000ms
                setTimeout(function(){
                  //Use the navigate function to navigate to the login page
                  naviget('/Login')
              }, 3000);}
            })//Using the catch function to find any exceptions not covered by the if statement
            .catch((error) =>{
              //Set the error to the value of error
                setError(error);
                //Print the error to the console
                console.log(error);
            });
            //Reset user to an empty string
            setUser("");
            //Reset the password to an empty string
            setPass("");
        }
        //If username and password are blank run this statement
        else{
          //Set error to this statement
            setError("All fields are required!");
            
        } 
    }
    
    //Creating a function to check if the username already exists
        function checkUser(){
        //creating a variable called url with the value of the api link
        var url = "https://trilearnv1.herokuapp.com/checkuser.php";
        //Creating a variable called headers with the value of the headers
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        //Creating a variable called data, with the user and pass values
        var Data = {
            user: user
        }
        //Calling the fetch function send a post request to the url with the data mentioned above
        fetch(url, {
            method: "POST",
            headers: headers,
            //Stringing the data in json format
            body: JSON.stringify(Data)
        }) //Calling the .then function to get the response and setting the response in json format
        .then((response) => response.json())
        //Calling the .then function to take that response and carry out a function
        .then((response) => {
          //Setting the error message to the response
            setError(response[0].result);
            //Printing the error response to the console
            console.log(response[0].result)
        }) //Catching any errors that were not covered previously
        .catch((error) =>{
          //Setting the error to the value of error
            setError(error);
            //Printing the error to console
            console.log(error);
        });
    }
  //Populating the page with the data
  return (
    //Using tailwind to create a div with the dimensions of display flex flex-col, justify content centerally, items centered and height of screen
    
    <div className="flex flex-col justify-center items-center h-screen">
      {/*Using tailwind to style a div, setting height to 200px. width to 1500px, padding left of 400px.
           padding right of 400px padding top of 20px and padding bot of 20 px, margin bottom of 60 px
           text sizing to 4xl text colour to green-500 and background set to white
           with rounded borders medium */}
      <div className="height-[200px] width-[1500px] pl-[400px] pr-[400px] pt-[20px] pb-[20px] mb-[60px] text-4xl text-green-500 bg-white rounded-md">
          <h1>Register</h1>
      </div>             
                  {/* If msg is not empty then display the message or if its empty display the error message*/}
                     {
                        msg !== "" ?
                        <span className="success mr-20">{msg}</span> :
                        <span className="text-green-500 pb-5 mr-20"><h1>{error}</h1></span>
                      }
        {/* Creating a div with the dimensions of margin right 15 */}
        <div className="mr-15">
          {/* Creating a from with an onSubmit function of handleSubmit */}
          <form onSubmit={handleSubmit}>
            {/*Creating a username label */}
            <label>Username:</label>
            {/* Using the link break */}
            <br />
            {/* Creating an input field with width of 400, height of 55, rounded size medium
                text input colour indigo and placeholder text green with a border */}
            <input 
            className="w-[400px] h-[55px] rounded-md text-indigo-500 placeholder-green-300 border"
            /* Type set to text*/
            type="text"
            /* Name set to user */
            name="user"
            /* Placeholder of username*/
            placeholder="username"
            /* using the onChange function to detect when an event has taken place in the input field and
               calling the handleChange function to update the values of the inputs */
            onChange={(event) => handleChange(event, "user")}
            /* Using the onBlur function to call the checkUser function when the user clicks off of the input field  */
            onBlur={checkUser}
            />
            {/* Using the line break */}
            <br />
          {/* Creating a div with a margin top of 10 */}
          <div className="mt-10">
          {/*Creating a label with text password */}
          <label>Password:</label>
          {/* Using the line break */}
          <br />
          {/* Creating an input field with width of 400, height of 55, rounded size medium
              text input colour indigo and placeholder text green with a border */}
          <input 
            className="w-[400px] h-[55px] rounded-md text-indigo-500 placeholder-green-300 border "
            /* Type set to text*/
            type="text"
             /* Name set to pass */
            name="pass"
            /* Placeholder of password */
            placeholder="password"
            /* using the onChange function to detect when an event has taken place in the input field and
               calling the handleChange function to update the values of the inputs */
            onChange={(event) => handleChange(event, "pass")}
          />
          </div>
          {/* Creating a div with padding top of 10 and padding left of 20*/}
          <div className='pt-10 pl-20'>
          {/*Creating a button with width 175px height 45px a background colour padding top of 0
             rounded by 2xl and padding right of 9, padding left of 9 and text center */}
          <button className="w-[175px] h-[45px] bg-[#80B07E] pt-0 rounded-2xl pr-9 pl-9 text-center">Register</button>
          </div>

         
        </form>
        
       </div>
    
    </div>
    );

}
