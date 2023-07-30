import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

function HomePage() {
    return ( 
        <div className="mx-14 my-4">
        <AddTodo/>

        <TodoList/>
        </div>
     );
}

export default HomePage;