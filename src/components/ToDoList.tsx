import type { ToDo } from "../utils/types";
import ToDoItem from "./ToDoItem";

type ToDoListProps = {
  toDoList: ToDo[];
  handleStatusChange: (id: number) => void;
  handleEdit: (id: number, userInput: string) => void;
};

export default function ToDoList({
  toDoList,
  handleStatusChange,
  handleEdit,
}: ToDoListProps) {
  const todoLists = toDoList.map(
    (item) =>
      item.isShow && (
        <ToDoItem
          key={item.id}
          item={item}
          handleStatusChange={handleStatusChange}
          handleEdit={handleEdit}
        />
      ),
  );

  return <div className="todo-list">{todoLists}</div>;
}
