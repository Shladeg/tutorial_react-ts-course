import axios from "axios";
import { FC, useEffect, useState } from "react";

import List from "../../components/list";
import Todo from "../../components/todo";

import { ITodo } from "../../types";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );

      setTodos(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <List
      items={todos}
      renderItem={(todo) => <Todo todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
