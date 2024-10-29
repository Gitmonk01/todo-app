import React from 'react';

function Todo({ text, todo, todos, setTodos }) {
  // Function to delete todo
  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // Function to mark as completed
  const completeTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <tr>
      <td className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</td>
      <td>
        <button onClick={completeTodo} className="complete-btn">
          {todo.completed ? "Undo" : "Complete"}
        </button>
      </td>
      <td>
        <button onClick={deleteTodo} className="trash-btn">Delete</button>
      </td>
    </tr>
  );
}

export default Todo;
