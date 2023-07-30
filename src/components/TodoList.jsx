import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  
  const {todos} = useContext(TodoContext);

    return (
      <div className="mt-5">
        {
          todos.map(todo => <TodoItem key={todo.id} title={todo.title} id={todo.id}/>)
        }
        
      </div>
    );
}

export default TodoList;