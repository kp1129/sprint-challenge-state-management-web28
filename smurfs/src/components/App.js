import React, { Component } from "react";
import Header from './Header';
import SmurfsContainer from './SmurfsContainer';
import AddSmurfForm from './AddSmurfForm';
import "./App.css";


const App = () => {
 
    return (
      <div className="App">
        <Header />

        <SmurfsContainer />

        <AddSmurfForm />
      </div>
    );
  
}

export default App;
