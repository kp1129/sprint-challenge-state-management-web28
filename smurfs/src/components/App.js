import React, { Component } from "react";
import Header from './Header';
import SmurfsContainer from './SmurfsContainer';
import "./App.css";


const App = () => {
 
    return (
      <div className="App">
        <Header />

        <SmurfsContainer />

        {/* addSmurf form */}
      </div>
    );
  
}

export default App;
