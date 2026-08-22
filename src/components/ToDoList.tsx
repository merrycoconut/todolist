import type { ToDo } from "../utils/types";
import ToDoItem from "./ToDoItem";

type ToDoListProps = {
  toDoList: ToDo[];
  handleStatusChange: (id: number) => void;
  handleEdit: (id: number, userInput: string) => void;
  handleDelete: (id: number) => void;
};

export default function ToDoList({
  toDoList,
  handleStatusChange,
  handleEdit,
  handleDelete,
}: ToDoListProps) {
  const todoLists = toDoList.map(
    (item) =>
      item.isShow && (
        <ToDoItem
          key={item.id}
          item={item}
          handleStatusChange={handleStatusChange}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ),
  );

  return <div className="todo-list">{todoLists}</div>;
}
