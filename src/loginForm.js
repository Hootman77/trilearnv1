//Importing react, useState and useEffect from react
import React, {useState, useEffect} from "react";
//Importing the Submit and register functions from the SubmitButton file
import { SubmitButton, RegisterButton } from "./SubmitButton";
//Importing useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";

//Exporting and creating the LoginForm function
export default function LoginForm() {
  //Using useNavigate to set a constant
  const naviget = useNavigate();

  //Setting constants using useState
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  //Using the useEffect function to call the getCards function when a side effect has taken place
  //These side effects take place after the React Dom has updated
  useEffect(() => {
    //Setting loginStaus to the value stored locally at loginStatus
    let loginStatus = localStorage.getItem("loginStatus");
    //If login status is true
    if(loginStatus){
      //Set error to the value of login status
        setError(loginStatus);
        //Set time out to function time of 3000ms
        setTimeout(function(){
            //Clear the values in local storage
            localStorage.clear();
            //Reload the current page
            window.location.reload();
        }, 3000);
    } //If login status is empty, set time out to function time of 5000ms
    setTimeout(function(){
        //Set message to empty string
        setMsg("");
    }, 5000);
    //Only rerun the function if the msg variable changes
  }, [msg]);

  //Creating a constant function that intakes event and type
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
  function handleSubmit (event) {
    //Prevents the page from defaulting after an event has occurred 
    event.preventDefault();
    //If user and pass are not empty then run this if statement
    if(user !== "" && pass != ""){
      //creating a variable called url with the value of the api link
      var url = "https://trilearnv1.herokuapp.com/index2.php/";
      //Creating a variable called headers with the value of the headers
      var headers = {
          "Accept": "application/json",
          "Content-type": "application/json"
      };
      //Creating a variable called data, with the user and pass values
      var Data = {
          user: user,
          pass: pass
      };
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
          //Printing to console log the value of the response in the array
          console.log(response[0].result)
          //If the value of the response is either Invalid Username or Invalid password then run this if statement
          if(response[0].result === "Invalid username!" || response[0].result === "Invalid password!"){
              //Set the error to the value of the response
              setError(response[0].result);
          }
          //otherwise run this statement
          else{
            //set the message to the value of the response
              setMsg(response[0].result);
              //Print the value in the console
              console.log(response[0].result)
              //Calling the timeout function to set the local data of login to true
              setTimeout(function(){
                  localStorage.setItem("login", true);
                  //Using react-router-dom to naviagte the page to /Flash
                  naviget("/Flash")
                  //Using the time of 5000ms
              }, 5000);
          }
      }) //Using the catch function to find any exceptions not covered by the if statement
      .catch((error) => {
        //Setting the error value to error
          setError(error);
          //Printing the error to console
          console.log(error);
      })
  }
  //otherwise setting error to all feilds are required
  else{
      setError("All field are required!")
  }
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
          <h1>Login</h1>
        </div>
        {/* Creating a div to display error or message */}
        <div className=" ">
          {/* If error is not empty then display the error message or if its empty display the message*/}
          {
            error !== "" ?
            <h3>{error}</h3>:
            <h3>{msg}</h3>
          }
          {/* Creating a form with an onSubmit to call the handleSubmit function*/}
          <form onSubmit={handleSubmit}>
            {/* Using a label to display the username*/}
            <label>Username:</label>
             {/* Creating a line break between the username  */}
            <br />
             {/* Creating an input with the dimensions
                width - 400px height - 55px rounded borders medium size text indigo and placeholder green with a border
                setting the type to text with a placeholder of username and value of {user}
                using onChange function to detect if an event has taken place and sending the valuues of the event along with 
                specifying that user has changed */}
            <input 
            className="w-[400px] h-[55px] rounded-md text-indigo-500 placeholder-green-300 border"
            type="text"
            placeholder="username"
            value={user}
            onChange={(event) => handleChange(event, "user")}
            />
            {/* Creating a line break between the username  */}
            <br />
          {/* Creating a div with dimensions of margin top 10 to seperate from the user input */} 
          <div className="mt-10">
            {/* Using a label to display the password*/}
          <label>Password:</label>
          {/* Creating a line break between the username  */}
          <br />
           {/* Creating an input with the dimensions
                width - 400px height - 55px rounded borders medium size text indigo and placeholder green with a border
                setting the type to text with a placeholder of username and value of {pass}
                using onChange function to detect if an event has taken place and sending the valuues of the event along with 
                specifying that pass has changed */}
          <input 
            className="w-[400px] h-[55px] rounded-md text-indigo-500 placeholder-green-300 border "
            type="password"
            placeholder="password"
            value={pass}
            onChange={(event) => handleChange(event, "pass")}
          />
          </div>
          {/* Calling the SubmitButton function from another file 
              with the text set to Enter*/}
          <SubmitButton
            text="Enter"
          />
         
        </form>
            
        {/* Creating a div tage with margin right of 20 */}
        <div className="mr-20">
        {/* Calling the Register Button function from another file */}
        <RegisterButton 
              text="Register" />
          
        
        
        </div>
       </div>
    
    </div>
    );

  
}


