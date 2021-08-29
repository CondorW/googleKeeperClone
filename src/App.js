import React, { useState } from 'react';
import './App.css';
import ToDoItem from './Components/ToDoItem';
import InputArea from "./Components/InputArea";


function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevArray) => {
      return (prevArray.filter((element, index) => { return (index != id); }));
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
      onClick={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              item={todoItem}
              onCheck={deleteItem}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
