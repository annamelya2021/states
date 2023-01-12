// import React from 'react';
import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';

// import Espresso from './components/Espresso/Espresso';
import Form from './components/TodoList/Form';
import Filter from './components/TodoList/Filter';
// import shortid from 'shortid';
// import TodoList from './components/TodoList/TodoList';

import TodoEditor from './components/TodoEditor';
import shortid from 'shortid';

// console.log(TodoEditor);
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// const App = () => {
//   <>
//     <h1>Cocтояние компонента</h1>
//     {/* <Counter /> */}
//   </>;
// };
// export default App;

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };
  addTodo = text => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Нашли тот туду котор нужно');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  // handleTagEvent = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };
  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <h1>Состояние компонента</h1>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>
        {/* <Form onSubmit={this.formSubmitHandler}></Form> */}
        <Form onSubmit={this.formSubmitHandler}></Form>
        <TodoEditor onSubmit={this.addTodo}></TodoEditor>
        <Filter value={filter} onChange={this.changeFilter} />
        {/* <Espresso /> */}
      </>
    );
  }
}

export default App;
