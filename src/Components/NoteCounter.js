import React, {useState} from "react";

function NoteCounter(){
  const [count,setCount] = useState(0);
  return(
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count + 1)}>Click to increase the counter</button>
    </div>
  );
}


export default NoteCounter;
