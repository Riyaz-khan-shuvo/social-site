import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FakeData from './FakeData/FakeData';
import Name from './Components/Name/Name';

function App() {
  // const first10 = FakeData.slice(0 , 10);
  // console.log(first10);

 
  return (
    <div className="App">
    <Name></Name>
      
    </div>
  );
}


export default App;
