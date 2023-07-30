import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { TodoProvider } from "../context/TodoContext";

function HomePage() {
    return (
      <div className="mx-14 my-4">
        <TodoProvider>
          <AddTodo />
          <TodoList />
        </TodoProvider>
      </div>
    );
}

export default HomePage;