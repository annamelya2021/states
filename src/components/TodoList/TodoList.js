import React from 'react';
import './TodoList.css';
import classNames from 'classnames';
// import Todo from '../Todo';
// console.log(Todo);
import Todo from '../Todo/Todo';
console.log(Todo);

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        // className="TodoList__item"
        // className={classNames()}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
        {/* <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        ></Todo> */}
      </li>
    ))}
  </ul>
);

export default TodoList;
