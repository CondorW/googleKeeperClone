import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Note from './Components/Note';
import Footer from './Components/Footer';
import CreateArea from './Components/CreateArea';

var loggedIn = true;

function App() {

  return (
      <div>
        <Header />
        <CreateArea />
        <Note key={1} title="Note title" content="Note content" />
        <Footer />
      </div>
    );
}
export default App;
