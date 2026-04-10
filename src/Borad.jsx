import UserInput from "./UserInput";
import Filter from "./Filter";
import ToDoList from "./ToDoList";
import { useReducer } from "react";

export default function Board() {
  const [toDoList, dispatch] = useReducer(toDoReducer, initialToDoList);

  function handleStatusChange(id) {
    dispatch({
      type: "change-task-status",
      id: id,
    });
  }

  function handleAdd(userInput){
    dispatch({
      type: "add-task",
      id: nextId++,
      text: userInput,
    })
  }

  function showActive() {
    dispatch({
      type: "showActive"
    });                
  }

  function showCompleted() {        
    dispatch({
      type: "showCompleted"
    });  
  }

  function showAll() {        
    dispatch({
      type: "showAll"
    });  
  }

  function toDoReducer(toDoList, action) {
    switch (action.type) {
      case "add-task": {
        return [
          ...toDoList,
          {
            id: action.id,
            title: action.text,
            isCompleted: false,
            isShow: true,
          },
        ]
      }
      case "change-task-status": {
        return toDoList.map(item => {
          if (item.id === action.id){
            return {...item, isCompleted: !item.isCompleted};
          }
          return item;      
        })
      }
      case "showActive": {
        return toDoList.map(item => ({...item, isShow: item.isCompleted? false: true}))
      }
      case "showCompleted": {
        return toDoList.map(item => ({...item, isShow: item.isCompleted? true: false}))
      }
      case "showAll": {
        return toDoList.map(item => ({...item, isShow: true}))
      }
    }

  } 

  return (
    <div className="board">
      <h2>Coco's Todo List</h2>
      <UserInput handleAdd={handleAdd}/>    
      <Filter showActive={showActive} showCompleted={showCompleted} showAll={showAll}/>
      <ToDoList toDoList={toDoList} handleStatusChange={handleStatusChange}/>          
    </div>
  )
}

let nextId = 4;
const initialToDoList = [
  {
    id: 1,
    title: "Water my plants",
    isCompleted: false,
    isShow: true,
  },
  {
    id: 2,
    title: "Go to the gym",
    isCompleted: true,
    isShow: true,
  },
  {
    id: 3,
    title: "Buy groceries",
    isCompleted: false,
    isShow: true,
  },
];