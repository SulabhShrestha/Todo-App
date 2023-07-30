import { useContext } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";

function TodoItem(props) {
  const { deleteTodoItem } = useContext(TodoContext);

  return (
    <div className="px-6 py-2 bg-yellow-500 rounded-md mt-2 relative">
      <p>{props.title}</p>
      <FaTimesCircle
        className="absolute -right-2 -top-2"
        color="red"
        onClick={() => deleteTodoItem(props.id)}
      />
    </div>
  );
}

export default TodoItem;
