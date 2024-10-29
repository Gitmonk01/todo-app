import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <table className="todo-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo 
              key={todo.id}
              text={todo.text}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
