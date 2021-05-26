import './App.css';
import React,{useState} from 'react';
import Searchbar from './Component/searchbar.js';


function App() {


  return (
    <div className="App">
    <h1 style={{textAlign:'center',color:'red'}}>Github search</h1>
    <Searchbar/>
    </div>
  );
}

export default App;
