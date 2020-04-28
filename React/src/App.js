import React from 'react';
import Dataviz from './components/dataviz'
import Postform from './components/postform'
import './components/css/dataviz.css'


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="topnav">
         <a class="active" href="#home">Intellectyx</a>
  
      </div>
      <br/>
        <div className="row">
        <div className="column">
        <Dataviz />
        </div>
      
      
      <div className="column">
        <Postform />
      </div>
      </div>
      </div>
      
     
     
        
       
     
     
      
   
    
    
       
        
     
      
     
    
    
  );
}

export default App;
