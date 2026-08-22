import type { ToDo } from "../utils/types";
import { useState } from "react";
import { RiPencilLine } from "@remixicon/react";

type ToDoItemProps = {
  item: ToDo;
  handleStatusChange: (id: number) => void;
  handleEdit: (id: number, userInput: string) => void;
};

export default function ToDoItem({
  item,
  handleStatusChange,
  handleEdit,
}: ToDoItemProps) {
  const [isClick, setClick] = useState(false);

  return (
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

        <RiPencilLine onClick={() => setClick(!isClick)} />
      </div>
      <p className="todo-status">
        {" "}
        {item.isCompleted ? "Completed" : "Active"}{" "}
      </p>
    </div>
  );
}
