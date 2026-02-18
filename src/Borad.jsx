import Todo from "./Todo"

function ToDoList() {
    const toDoList = [
      {
        id: 1,
        title: "Water my plants",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Go to the gym",
        isCompleted: false,
      },
      {
        id: 3,
        title: "Buy groceries",
        isCompleted: false,
      },
    ];

    const todoLists = toDoList.map((item) => {
      return <Todo key={item.id} content={item}/>
    });

    return (
      <div className="todo-list">
        {todoLists}
      </div>
    )
}


export default function Board() {

  return (
    <div className="board">
      <h2>Coco's Todo List</h2>
      <div className="user-input">
        <p>What is your plan today</p>
      </div>
      <div>
        {/* TO DO handle filter */}
        <div className="filter-button">
            <button onclick="filterAll()">All</button>
            <button onclick="filterActive()">Active</button>
            <button onclick="filterCompleted()">Completed</button>                    
        </div>
        <ToDoList />
      </div>      
    </div>
  )
}