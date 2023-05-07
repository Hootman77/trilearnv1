//Importing react, useState, useEffect and useRef from react
import React, {useState, useEffect, useRef} from 'react'
//Importing axios from axios package
import axios from 'axios'


//Exporting and creating a function called FlashcardTest
export default function FlashcardTest() {

    //Creating a constant called frontEl and setting it to useRef value of 1, this is used to set the current value of the flash card
    const frontEL = useRef(1)
    const index = useRef(1)
    

    //Creating a constant with rowData array using usestate
    const [rowData, setRowData] = useState([]);
    //Creating a constant with isFlipped using usestate
    const [isFlipped, setIsFlipped] = useState(false);
    //Creating a constant with cards using usestate
    const [cards, setCards] = useState([]);

    
    

  //Using the useEffect function to call the getCards function when a side effect has taken place
  //These side effects take place after the React Dom has updated
    useEffect(() => {
        getCards();
    }, []);


//Creating a getCards function
  function getCards() {
    //Calling axios to send a Get request to the php API and then getting the response from the request  
    axios
      .get("https://trilearnv1.herokuapp.com/index5.php").then(function(response){
              //Setting cards to the response data
              setCards(response.data)
              //Creating a data constant with the value of the response data
              const data = response.data
               
              //Creating a constant which will equal the data found by looking at the row and setting the current deck_id to the value 
              //of the current frontEl value
             
              const singleRow = data.find(row => row.deck_id == frontEL.current);
              //Setting the row data to the value of singleRow which is used to display the flashcards seperately
              setRowData(singleRow);
              //Printing the value of singleRow to console
              console.log(singleRow);
              
              index.current =(frontEL.current)
              
    })}
              
          
    
  //Creating a constant function of handleNextClick
  const handleNextClick = () => {
    //Calling getCards function to update the current flash card to display
    getCards();
    //Setting the value of is flipped to false so that the answer isnt showing
    setIsFlipped(false);
    //Updating the value of frontEl by + 10
    frontEL.current = (frontEL.current + 10);
    index.current = (index.current + 10)
    // If statement to determine if the current value of frontEL is greater than the length of the amount of cards
    if (frontEL.current > index) {
        //Setting the current value of frontEl to the value of current card length, this prevents loading cards that dont exist
        index.current = index.current
        frontEL.current = index.current
        //Printing the value of frontEl to console
        console.log(frontEL)
    } 
    else {
      //If this statement is false print frontEl to console
      console.log(frontEL);
    }
  }

  //Creating a constant function of handlePrevClick
  const handlePrevClick = () => {
    //Calling getCards function to update the current flash card to display
    getCards()
    //Setting the value of is flipped to false so that the answer isnt showing
    setIsFlipped(false);
     //Updating the value of frontEl by - 10
    frontEL.current = (frontEL.current - 10);
    index.current = (index.current - 10);
    // If statement to determine if the current value of frontEL is less than or equal to zero
    if (frontEL.current <= 0) {
      //Sets frontEls current value back to one to ensure that frontEl value doesnt stay below zero
      frontEL.current = 1
    } else {
      //Prints to console the value of frontEl
      console.log(frontEL);
    }
  };

  //Creating a constant function to handleFlipClick
  const handleFlipClick = () => {
    //Sets isFlipped value to opposite current value
    setIsFlipped(!isFlipped);
  };
        

  //Populates the page with the data bellow
  return (

        //Wrapping the page in a div element
        <div>
          
            
            
              {/* Setting the dimensions of the div tag using tailwind
                  Setting the display to flex flex col, items center, content justified center, margin top of 0 
                  padding top to 48, padding left to 10, margin left to 20 and margin right to 20 with height set to screen */}
              <div className="flex flex-col items-center justify-center mt-0 pt-1  pl-10 ml-20 mr-20 h-screen">
                
                    {/*Using tailwind to style a div, setting height to 200px. width to 1500px, padding left of 400px.
                      padding right of 400px padding top of 20px and padding bot of 20 px, margin bottom of 30 px
                      text sizing to 4xl text colour to green-500 and background set to white
                      with rounded borders medium */}
                    <div className="height-[200px] width-[1500px] pl-[400px] pr-[400px] pt-[20px] pb-[20px] mb-[30px] text-4xl text-green-500 bg-white rounded-md">
                      <h1>Dashboard</h1>
                    </div>
                    {/* Setting the dimensions of the div tag using tailwind
                    Setting the max width to 1550 px and max height to 1500px and height to 400px
                    padding to 100px and width to full with and setting background colour
                    with a shadow around the contents with a rounded corners and padding on the x axis of 4
                    padding on the y axis of 6 and using the transform function to hover the y position to 1 when hovered on
                    with a hover shadow of xl and a duration of 200*/}
                <div className="max-w-[1550px] max-h-[1500px] h-[400px] padding-[100px] w-full bg-white shadow-lg rounded-lg px-4 py-6 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                  {/* Creating a flip container div */}
                  <div className="flip container">
                    {/* Creating a flipper div */}
                    <div className="flipper">
                      {/* Creating a front div */}
                      <div className="front" >
                        <div>
                          {/* If there is data in rowData then the Questions will be displayed otherwise the message Loading will appear*/}
                          {rowData ? (
                          <div ><h3>Question:</h3>
                          <p>{rowData.flash_question}</p>
                          <p>{rowData.option_1}</p>
                          <p>{rowData.option_2}</p>
                          <p>{rowData.option_3}</p>
                          <p>{rowData.option_4}</p>
                          </div>): "Loading"}
                          
                        </div>
                       
                        </div>
                      
                      {/* Creating a div that will only be displayed if isFlipped is set to true
                          otherwise will be hidden*/}
                      <div className={!isFlipped ? "hidden" : " mt-20"}>
                      {/* If there is data in rowData then the answer will appear otherwise the message loading will appear*/}
                      {rowData ? (
                          <div >
                            <h3 className="text-lg font-medium mb-2 break-normal">Answer: </h3>
                            <p className="text-gray-800">{rowData.flash_answer}</p>
                          
                          </div>): "Loading"}
                        
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Setting the div dimensions to margin top 4 display of flex and justify between */}
                  <div className="mt-4 flex justify-between">
                    {/* Buttons with padding x of 4, padding y of 2 with a blue background and white text, when hovered
                    the colour of the button will change to a darker shade of blue
                    
                    Each button calls a different function onClick*/}
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handlePrevClick}>Previous</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleFlipClick}>Flip</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleNextClick}>Next</button>
                  </div>
                </div>
              </div>
             
                
          </div>
  )}
                    
                           

                    

                        
            
    
    
  




  

