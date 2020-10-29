import React from "react";
import Header from './Header';
import SmurfsContainer from './SmurfsContainer';
import AddSmurfForm from './AddSmurfForm';
import "./App.css";


const App = () => { 
    return (
      <div className="App">
        <Header />
        <AddSmurfForm />
        <SmurfsContainer />        
      </div>
    );  
}

export default App;
