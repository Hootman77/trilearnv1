//Importing axios from axios
import axios from 'axios';
//Importing react and useState from react
import React, {useState} from 'react';





//Exporting and creating the function create quiz
export default function CreateQuiz() {
  
    
  
    //Creating the constants that require useState
    const [inputs, setInputs] = useState([])
    const [error, setError] = useState(false)
    const [msg, setMsg] = useState("")

    //Creating the handleChange function which will input events into the function
    const handleChange = (event) => {
        //Setting the name constant to the name of the target of the event
        const name = event.target.name;
        //Setting the value constant to the value of the target of the event
        const value = event.target.value;
        //Setting the inputs to the multiple values of the inputs and binding the name to the value of the inputs
        setInputs(values => ({...values, [name]: value}));
        console.log(inputs)
    }

    //Creating the handleSubmit function which will input the event value
    const handleSubmit = (event) => {

        //Prevents the page from defaulting after an event has occurred 
        event.preventDefault();
        //Seeing if the length of inputs = 0 and if so setting Error message to true
        if (inputs.length == 0) {
            setError(true);
           
        }
        //Otherwise carrying out these functions
        else {
            //Setting error to false
            setError(false);
            //Setting message to record successfull
            //Using axios to post the inputs to the php api and then getting the response and posting the data to console
            axios.post("https://trilearnv1.herokuapp.com/index4.php", inputs).then(function(response){     
            console.log(response.data)
            setMsg("Record created successfully")
    }).catch((error) => {
        //Setting the error value to error
          setError("Inputs cannot be empty");
          //Printing the error to console
          console.log(error);
      });

    }
    }

//Function to refresh the page
function refreshPage(){
    //Reloads the page
    window.location.reload();
} 
//Populates the page with the contents bellow
  return (
    //Wrapping the contents in a div tag
    <div>
       {/* Creating a div with tailwind with the height set to screen, width to 1250px, display flex flex col and items center with content
       justified center and padding top 32 and padding left 40 */}
        <div className='h-screen w-[1250px] flex flex-col items-center justify-center pt-16 pl-40'>
            {/*Using tailwind to style a div, setting height to 200px. width to 1500px, padding left of 400px.
           padding right of 400px padding top of 20px and padding bot of 20 px, margin bottom of 10 px
           text sizing to 4xl text colour to green-500 and background set to white
           with rounded borders medium */}
            <div className="height-[200px] width-[1500px] pl-[400px] pr-[400px] pt-[20px] pb-[20px] mb-[10px] text-4xl text-green-500 bg-white rounded-md">
          <h1>Create Quiz</h1>
        </div>
            {/* If the message constant is not empty then a message saying record created successfully will be displayed
            otherwise no message will be displayed */}
            {msg !== "" ?  <h1 className="text-red-500">Record created successfull</h1>: ""
            }
            {/* If the error is set to true the message inputs cannot be empty will be displayed otherwise no message will be displayed */}
            {error ? <h1 className="text-red-500">Inputs cannot be empty</h1>: "" }
            <div className="max-w-[750px] max-h-[700px] h-[470px] w-full bg-white shadow-lg rounded-lg px-4 py-6 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200 ">
                
                {/* Creating a form with an onSubmit function to call handleSubmit with padding top of 4*/}
                <form onSubmit={handleSubmit} className='pt-4'>
                    {/* Creating a label with the name of input field */}
                    <label>Deck Name:</label> 
                    {/* Creating an input with border of 2 margin top of 5 margin top of 2 border colour green
                    padding left of 40 with type text and setting the name of the input with an onChange function to call handleChange 
                    function 
                    */}
                    <input className= 'border-2 ml-5 mt-2 border-green-500 pl-40 ' type ="text" name="deck_name" onChange={handleChange} />
                    {/* Calling a line break */}
                    <br />
                    {/* Creating a label with the name of input field */}
                    <label>Deck Info:</label> 
                    {/* Creating an input with border of 2 margin top of 5 margin top of 2 border colour green
                    padding left of 40 with type text and setting the name of the input with an onChange function to call handleChange 
                    function 
                    */}
                    <input type ="text" className="border-2 ml-5 mt-2 border-green-500 pl-40" name="deck_info" onChange={handleChange} />
                    {/* Calling a line break */}
                    <br />
                    {/* Creating a label with the name of input field */}
                    <label>Flashcard ID:</label> 
                    {/* Creating an input with border of 2 margin top of 5 margin top of 2 border colour green
                    padding left of 40 with type text and setting the name of the input with an onChange function to call handleChange 
                    function 
                    */}
                    <input type ="text" className="border-2 ml-5 mt-2 border-green-500 pl-40" name="flash_id" onChange={handleChange} />
                    {/* Calling a line break */}
                    <br />
                    {/* Creating a label with the name of input field */}
                    <label>Flashcard Question:</label>
                    {/* Creating an input with border of 2 margin top of 5 margin top of 2 border colour green
                    padding left of 40 with type text and setting the name of the input with an onChange function to call handleChange 
                    function 
                    */}
                    <input type ="text" className="border-2 ml-5 mt-2 border-green-500 pl-40" name="flash_question" onChange={handleChange} />
                    {/* Calling a line break */}
                    <br />
                    {/* Creating a label with the name of input field */}
                    <label>Flashcard Answer:</label> 
                    {/* Creating an input with border of 2 margin top of 5 margin top of 2 border colour green
                    padding left of 40 with type text and setting the name of the input with an onChange function to call handleChange 
                    function 
                    */}
                    <input type ="text" className="border-2 ml-5 mt-2 border-green-500 pl-40" name="flash_answer"  onChange={handleChange} />
                    {/* Calling a line break */}
                    <br />
                    {/* Creating a label with the name of input field */}
                    <label>Option 1</label> 
                    {/* Creating an input with border of 2 margin top of 5 margin top of 2 border colour green
                    padding left of 40 with type text and setting the name of the input with an onChange function to call handleChange 
                    function 
                    */}
                    <input type ="text" className="border-2 ml-5 mt-2 border-green-500 pl-40" name="option_1" onChange={handleChange}  />
                    {/* Calling a line break */}
                    <br />
                    {/* Creating a label with the name of input field */}
                    <label>Option 2</label> 
                    {/* Creating an input with border of 2 margin top of 5 margin top of 2 border colour green
                    padding left of 40 with type text and setting the name of the input with an onChange function to call handleChange 
                    function 
                    */}
                    <input type ="text" className="border-2 ml-5 mt-2 border-green-500 pl-40" name="option_2"  onChange={handleChange} />
                    {/* Calling a line break */}
                    <br />
                    {/* Creating a label with the name of input field */}
                    <label>Option 3</label> 
                    {/* Creating an input with border of 2 margin top of 5 margin top of 2 border colour green
                    padding left of 40 with type text and setting the name of the input with an onChange function to call handleChange 
                    function 
                    */}
                    <input type ="text" className="border-2 ml-5 mt-2 border-green-500 pl-40" name="option_3"  onChange={handleChange} />
                    {/* Calling a line break */}
                    <br />
                    {/* Creating a label with the name of input field */}
                    <label>Option 4</label> 
                    {/* Creating an input with border of 2 margin top of 5 margin top of 2 border colour green
                    padding left of 40 with type text and setting the name of the input with an onChange function to call handleChange 
                    function 
                    */}
                    <input type ="text" className="border-2 ml-5 mt-2 border-green-500 pl-40" name="option_4"  onChange={handleChange} />
                    {/* Calling a line break */}
                    <br />
                    {/* Creating a label with the name of input field */}
                    <label>Category</label> 
                    {/* Creating an input with border of 2 margin top of 5 margin top of 2 border colour green
                    padding left of 40 with type text and setting the name of the input with an onChange function to call handleChange 
                    function 
                    */}
                    <input type ="text" className="border-2 ml-5 mt-2 border-green-500 pl-40" name="category"  onChange={handleChange} />
                    {/* Calling a line break */}
                    <br />
                    {/* Creating a button with margin left of 64, margin top of 2 padding x of 4 and padding y of 2 background colour and text colour with rounded edges and a hover colour */}
                    <button className="ml-64 mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600">Save</button>
                   

                </form>
                {/* Creating a button with margin left of 64, margin top of 2 padding x of 4 and padding y of 2 background colour
                 and text colour with rounded edges and a hover colour which calls the refresh function on click*/}
                <button className=" mr-20 mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600" onClick={refreshPage}>New Entry</button>  
            </div>
            
        </div>
        
        </div>
  )
}
