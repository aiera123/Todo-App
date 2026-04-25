import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <span className="todo-text"
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}

export default TodoItem;