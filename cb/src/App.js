import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";


import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          </Routes>
        
    </div>
  );
};

export default App;
