function ToDoItem({item, handleStatusChange}) {  
  return (
    <div className="todo-item" >
      <div>
          <input 
            id={item.title} className="check-button" type="checkbox" 
            checked={item.isCompleted} onChange={() => handleStatusChange(item.id)} 
          />
          <label> {item.title} </label>
      </div>
      <p className="todo-status"> {item.isCompleted ? "Completed" : "Active"} </p>
    </div>
  )
}

export default function ToDoList({toDoList, handleStatusChange}) {   
  const todoLists = toDoList.map((item) => {
    if (item.isShow) {
      return <ToDoItem key={item.id} item={item} handleStatusChange={handleStatusChange}/>
    }    
  });

  return (
    <div className="todo-list">
      {todoLists}
    </div>
  )
}