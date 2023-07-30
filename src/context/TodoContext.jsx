import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Creating context
const TodoContext = createContext();

// Providing context to it's children

const TodoProvider = function({children}){

    // [todo] contains array of object
    // object includes, title, and unique user id
    const [todos, setTodos] = useState([]);

    // title is string, new todo item
    function addNewTodoItem(title){
        console.log("INside of item")
        setTodos([{id: uuidv4(), title}, ...todos])

        console.log(todos);
    }

    // id is uuid, string
    function deleteTodoItem(id){
        setTodos(todos.filter(todo => id !== todo.id));

        console.log(todos)
    }

    return <TodoContext.Provider value={{
        todos, 
        addNewTodoItem,
        deleteTodoItem,
    }}>
        {children}
    </TodoContext.Provider>
}

export {TodoContext, TodoProvider};