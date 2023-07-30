import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { TodoProvider } from "../context/TodoContext";

function HomePage() {
    return (
      <div className="mx-20 my-4">
        
          <AddTodo />
          <TodoList />
        
      </div>
    );
}

export default HomePage;