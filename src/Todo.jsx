import { useState } from "react";

function handleClick() {
  console.log("clicked");
}

// Revisit learn React note: Adding interactivity(event and state)

export default function Todo({content}) {  


  const todoLists = content.map((item) => {
    return <div key={item.id} className="todo-item">
      <input id={item.title} className="check-button" type="checkbox" onClick={handleClick}/>
      <label for={item.title}>{item.title}</label>      
    </div>
  });
    
  return (
    <div>
      {todoLists}
    </div>
  )
}


// To Do
// version control system: git