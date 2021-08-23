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
  const [cName, sName] = useState("");
  function namePrint(evt) {
    sName(evt.target.value);
  }
  const [cHeading, sHeading] = useState("");
  function headingChange(){
    sHeading(cName);
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
      <h1>Hello {cHeading}</h1>
      <form className="form">
        <input onChange={namePrint} type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {loggedIn ? null : <input type="password" placeholder="Confirm Password" />}
        <button onClick={headingChange} className="form-button" type="submit">{loggedIn ? "Login" : "Register"}</button>
      </form>
    </div>
  );
}
export default App;
