import Todo from "./Todo"

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
]

export default function Board() {
  
  // console.log(toDoList[0]);
  return (
    <div className="board">
      <h3>Board</h3>

      <div className="user-input">
        <p>What is your plan today</p>
      </div>
      <div>
        <div>
          A placehoder for status
          <p>The to do list should have 3 "filter": All, Active, Completed</p>
        </div>
        <Todo content={toDoList}/>
      </div>
      
      
    </div>
  )
}