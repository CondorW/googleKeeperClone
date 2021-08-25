import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Note from './Components/Note';
import Footer from './Components/Footer';
import notes from "./notes";
import Form from './Components/Form';
import NoteCounter from "./Components/NoteCounter";

var loggedIn = true;

function App() {


  const [cValue,sValue]=useState("");
  const [cList,sList]=useState([]);


function stateSave(evt){
  const value = evt.target.value;
  sValue(value);
}

function addItem(){
  sList((cList)=>{
    return([
      ...cList,
      cValue
    ]);
  })
}


return (
  <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={stateSave} type="text" name="inputField" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {cList.map((litem)=>{
          return(
            <li>{litem}</li>
          );
        })}
          </ul>
      </div>
    </div>
);
}
export default App;
