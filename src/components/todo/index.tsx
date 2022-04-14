import { FC } from "react";
import { ITodo } from "../../types";

interface TodoProps {
  todo: ITodo;
}

const Todo: FC<TodoProps> = ({ todo }) => {
  return (
    <div>
      {todo.title} - {todo.completed ? "Выполнено" : "Не выполнено"}
    </div>
  );
};

export default Todo;
