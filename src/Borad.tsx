import UserInput from "./components/UserInput";
import Filter from "./components/Filter";
import ToDoList from "./components/ToDoList";
import { useEffect, useReducer } from "react";
import type { ToDo } from "./utils/types";

// Initial todos if localStorage is empty
if (localStorage.length === 0) {
  localStorage.setItem("todos", JSON.stringify([]));
}

type Action = {
  type?: string;
  id?: number;
  todoText?: string;
};

export default function Board() {
  const [toDoList, dispatch] = useReducer(
    toDoReducer,
    JSON.parse(localStorage.todos),
  );

  function handleStatusChange(id: number) {
    dispatch({
      type: "change-task-status",
      id: id,
    });
  }

  function handleAdd(userInput: string) {
    dispatch({
      type: "add-task",
      id: nextId++,
      todoText: userInput,
    });
  }

  function handleEdit(id: number, userInput: string) {
    dispatch({
      type: "edit-task",
      id: id,
      todoText: userInput,
    });
  }

  function handleDelete(id: number) {
    dispatch({
      type: "delete-task",
      id: id,
    });
  }

  function showActive() {
    dispatch({
      type: "showActive",
    });
  }

  function showCompleted() {
    dispatch({
      type: "showCompleted",
    });
  }

  function showAll() {
    dispatch({
      type: "showAll",
    });
  }

  function toDoReducer(toDoList: ToDo[], action: Action) {
    switch (action.type) {
      case "add-task": {
        return [
          ...toDoList,
          {
            id: action.id as number,
            todoText: action.todoText as string,
            isCompleted: false,
            isShow: true,
          },
        ];
      }

      case "edit-task": {
        return toDoList.map((item) => {
          if (item.id === action.id && action.todoText) {
            return { ...item, todoText: action.todoText };
          }
          return item;
        });
      }

      case "delete-task": {
        return toDoList.filter((item) => item.id !== action.id);
      }

      case "change-task-status": {
        return toDoList.map((item) => {
          if (item.id === action.id) {
            return { ...item, isCompleted: !item.isCompleted };
          }
          return item;
        });
      }
      case "showActive": {
        return toDoList.map((item) => ({
          ...item,
          isShow: item.isCompleted ? false : true,
        }));
      }
      case "showCompleted": {
        return toDoList.map((item) => ({
          ...item,
          isShow: item.isCompleted ? true : false,
        }));
      }
      case "showAll": {
        return toDoList.map((item) => ({ ...item, isShow: true }));
      }
      default:
        return toDoList;
    }
  }

  // Use useEffect to update localStorage to the lastest State
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="board">
      <h2 className="header">A simple Todo List</h2>
      <UserInput handleAdd={handleAdd} />
      <Filter
        showActive={showActive}
        showCompleted={showCompleted}
        showAll={showAll}
      />
      <ToDoList
        toDoList={toDoList}
        handleStatusChange={handleStatusChange}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

let nextId = 1;
