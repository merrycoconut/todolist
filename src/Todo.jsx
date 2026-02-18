import { useState } from "react";

export default function Todo({content}) {  
  const [isDone, setIsDone] = useState(false);
    
  return (
    <div key={content.id} className="todo-content" >
      <div className="todo-item">
          <input id={content.title} className="check-button" type="checkbox" checked={isDone} onChange={() => setIsDone(!isDone)}/>
          <label for={content.title}>{content.title}</label>
      </div>
      <p className="todo-status">{isDone ? "Completed" : "Active"}</p>
    </div>
  )
}