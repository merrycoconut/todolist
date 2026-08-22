import "./ToDoItem.css";
import type { ToDo } from "../utils/types";
import { useState } from "react";
import { RiPencilLine, RiCheckLine, RiDeleteBinLine } from "@remixicon/react";

type ToDoItemProps = {
  item: ToDo;
  handleStatusChange: (id: number) => void;
  handleEdit: (id: number, userInput: string) => void;
  handleDelete: (id: number) => void;
};

export default function ToDoItem({
  item,
  handleStatusChange,
  handleEdit,
  handleDelete,
}: ToDoItemProps) {
  const [isClick, setClick] = useState(false);

  return (
    <div className="todo-item-container">
      <div className="todo-item">
        <div>
          <input
            id={item.todoText}
            className="check-button"
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => handleStatusChange(item.id)}
          />
          {/* Use click to trigger if render the plain content or userinput component */}

          {isClick ? (
            <>
              <input
                className="user-input-editted"
                name="userInputEditted"
                defaultValue={item.todoText}
                onChange={(e) => handleEdit(item.id, e.target.value)}
              />
            </>
          ) : (
            <label> {item.todoText} </label>
          )}
        </div>
        <div className="todo-buttons">
          {isClick ? (
            <RiCheckLine size={20} onClick={() => setClick(!isClick)} />
          ) : (
            <RiPencilLine size={20} onClick={() => setClick(!isClick)} />
          )}

          <RiDeleteBinLine size={20} onClick={() => handleDelete(item.id)} />
        </div>
      </div>
      <p
        className={
          item.isCompleted
            ? "todo-status todo-complete"
            : "todo-status todo-active"
        }
      >
        {" "}
        {item.isCompleted ? "Completed" : "Active"}{" "}
      </p>
    </div>
  );
}
