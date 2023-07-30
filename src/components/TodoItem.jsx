function TodoItem(props) {
    return (
      <div className="px-6 py-2 bg-yellow-500 rounded-md mt-2">
        <p>{props.title}</p>
      </div>
    );
}

export default TodoItem;