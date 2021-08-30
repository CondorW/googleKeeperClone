import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Note from './Components/Note';
import Footer from './Components/Footer';
import CreateArea from './Components/CreateArea';





function App() {

  const [cItemTitle, sItemTitle] = useState([]);
  const [cItemText, sItemText] = useState([]);

  function addNote(TitleInput, TextInput,e) {
    sItemTitle(prevItemTitle => {
      return [...prevItemTitle, TitleInput];
    })
    sItemText(prevItemText => {
      return [...prevItemText, TextInput];
    })
    e.preventDefault();
  }
  function deleteNote(id){
    sItemTitle(prevItemTitle => {
      return (prevItemTitle.filter((element,index)=>{return(index != id);}));
    })
    sItemText(prevItemText => {
      return (prevItemText.filter((element,index)=>{return(index != id);}));
    })
  }


  return (
    <div>
      <Header />
      <CreateArea
        onClick={addNote} />
      {cItemTitle.map((itemTitle,index)=>
      <Note
        key={index}
        title={itemTitle}
        content={cItemText[index]}
        deleteNote={deleteNote}
        id={index}
      />)}
      <Footer />
    </div>
  );
}
export default App;
