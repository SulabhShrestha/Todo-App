import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
  // new todo Item
  const [todoTitle, setTodoTitle] = useState("");

  const {addNewTodoItem} = useContext(TodoContext);

  function addTodo(){
    addNewTodoItem(todoTitle)
    setTodoTitle("")
  }

    return (
      <div className="flex">
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-lg py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Add new item"
          type="text"
          name="search"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="rounded-r-lg bg-blue-500 px-6 py-2 text-white hover:bg-amber-400 cursor-pointer"
        >
          Send
        </button>
      </div>
    );
}

export default AddTodo;