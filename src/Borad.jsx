import UserInput from "./UserInput";
import Filter from "./Filter";
import ToDoList from "./ToDoList";
import { useState } from "react";

export default function Board() {
  const [toDoList, setToDoList] = useState([
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
  ]);

  function handleStatusChange(id) {
    const nextToDoList = toDoList.map(item => {
      if (item.id === id){
        return {...item, isCompleted: !item.isCompleted};
      }
      return item;      
    });

    setToDoList(nextToDoList);
  }

  function showActive() {                
    const nextToDoList = toDoList.map(item => {
      return {...item, isShow: item.isCompleted? false : true}
    });

    setToDoList(nextToDoList);
  }

  function showCompleted() {        
    const nextToDoList = toDoList.map(item => {
      return {...item, isShow: item.isCompleted? true : false}
    });

    setToDoList(nextToDoList);
  }

  function showAll() {        
    const nextToDoList = toDoList.map(item => {
      return {...item, isShow: true}
    });

    setToDoList(nextToDoList);
  }
 

  return (
    <div className="board">
      <h2>Coco's Todo List</h2>
      <UserInput />    
      <Filter showActive={showActive} showCompleted={showCompleted} showAll={showAll}/>
      <ToDoList toDoList={toDoList} handleStatusChange={handleStatusChange}/>          
    </div>
  )
}