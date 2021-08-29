import React, {useState} from "react";

function CreateArea(props) {

  const [cTitleInput, sTitleInput] = useState("");
  const [cTextInput, sTextInput] = useState("");

  function handleTitleInput(evt){
    let newTitleValue = evt.target.value;
    sTitleInput(newTitleValue);
    console.log(cTitleInput);
  }
  function handleTextInput(evt){
    let newTextValue = evt.target.value;
    sTextInput(newTextValue);
    console.log(cTextInput);
  }


  return (
    <div>
      <form>
        <input onChange={handleTitleInput} name="title" placeholder="Title" />
        <textarea onChange={handleTextInput} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={(e)=>{props.onClick(cTitleInput,cTextInput,e)}}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
