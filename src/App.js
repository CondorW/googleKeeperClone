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

  const [cObj, sObj] = useState({
    fName:"",
    lName:"",
    eMail:""
  })

function changeState(evt){
  let tValue = evt.target.value;
  let tName = evt.target.name;
  console.log(tValue, tName);
  if (tName === "fName") {
    sObj((cObj) => ({
      fName: tValue,
      lName: cObj.lName,
      eMail: cObj.eMail
    }));
  }
  else if(tName === "lName"){
    sObj((cObj) => ({
      fName: cObj.fName,
      lName: tValue,
      eMail: cObj.eMail
    }));
  }
  else if(tName === "eMail"){
    sObj((cObj) => ({
      fName: cObj.fName,
      lName: cObj.lName,
      eMail: tValue
    }));
  }
}


  // const time = new Date().toLocaleTimeString();
  // const [cTime, sTime] = useState(time);
  // const [isMousedOver, setMouseOver] = useState(false);
  // function mouseOverEvent() {
  //   setMouseOver(true);
  // }
  // function mouseOutEvent() {
  //   setMouseOver(false);
  // }
  // setInterval(updateTime, 1000);
  // function updateTime() {
  //   const newTime = new Date().toLocaleTimeString();
  //   sTime(newTime);
  // }
  // return (
  //   <div>
  //     <Header />
  //     {notes.map((ele => {
  //       return (
  //         <Note
  //           noteTitle={ele.title}
  //           noteContent={ele.content}
  //         />
  //       );
  //     }))}
  //     <NoteCounter />
  //     <div>{cTime}</div>
  //     <button
  //       onMouseOver={mouseOverEvent}
  //       onMouseOut={mouseOutEvent}
  //       style={{ backgroundColor: isMousedOver ? "white" : "red" }}
  //       >State changin Button 
  //     </button>
  //     <Footer />
  //   </div>
  // );
  return (
    <div className="container">
      <h1>Hello {cObj.fName} {cObj.lName}</h1>
      <p>{cObj.eMail}</p>
      <form className="form">
        <input onChange={changeState} type="text" placeholder="First Name" name="fName" />
        <input onChange={changeState} type="text" placeholder="Last Name" name="lName"/>
        <input onChange={changeState} type="email" placeholder="Your Mail" name="eMail" />
        <button className="form-button" type="submit">{loggedIn ? "Login" : "Register"}</button>
      </form>
    </div>
  );
}
export default App;
