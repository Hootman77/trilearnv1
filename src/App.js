//Importing react from react
import React from 'react';
//Importing Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom';
//Importing Navbar function
import Navbar from "./components/Navbar";
//Importing Study function
import Study from './components/Study';
//Importing Home function
import Home from "./components/Home";
//Importing Login function
import Login from "./components/Login";
//Importing Register function
import Register from "./components/Register";
//Importing Flash function
import Flash from './components/Flash';



//Creating the App function
function App() {



//Populating the app page with Navbar and routing the links of the navbar using router-dom
return (
  <>
  <Navbar />
  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Study" element={<Study />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Flash" element={<Flash />} />
  </Routes> 

   
  
  
  
  </>
  );
  }


//Exporting the App as default
export default App;