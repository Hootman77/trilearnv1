//Importing react from react
import React from 'react';
//Importing reactDom form react-dom
import ReactDOM from 'react-dom';
//Importing the index css file
import './index.css';
//Importing the app
import App from "./App"
//Importing browserrouter from react-router-dom
import { BrowserRouter } from 'react-router-dom';


//Rendering ReactDom on the app
ReactDOM.render(
  //Rendering the BrowserRouter to allow me to link pages
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //Getting the Element id of the document of the root app function
  document.getElementById('root')
);

