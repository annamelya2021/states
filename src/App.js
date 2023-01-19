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
import Modal from './components/Modal';
import Clock from './components/Clock';
import Tabs from './components/Tabs';
import tabs from './tabs.json';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
import { ReactComponent as DeleteIcon } from './icons/delete.svg';

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
    showModal: false,
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
    // console.log(todoId);

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

  componentDidMount() {
    // console.log('App componentDidMount');
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
    // console.log(parsedTodos);
    // this.setState({ todos: parsedTodos });
  }

  handleTagEvent = event => {
    this.setState({ tag: event.currentTarget.value });
  };
  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      // console.log('Обновилось поле todos записіваю метод в хранилище');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    // console.log('component DidUpdate :>> ');
    // console.log('prevProps :>> ', prevProps);
    // console.log('prevState :>> ', prevState);
    // console.log('this.state :>> ', this.state);
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    // console.log('App render');
    const { showModal } = this.state;
    // const { filter } = this.state;

    const { todos } = this.state;
    const { filter } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <h1>Состояние компонента</h1>
        <Counter initialValue={10} />
        <Dropdown></Dropdown>
        <ColorPicker options={colorPickerOptions} />
        {/* <IconAdd></IconAdd> */}
        <IconButton
          type="button"
          onClick={this.toggleModal}
          aria-label="доб туту"
        >
          <AddIcon width="40px"></AddIcon> Відкрити модалку
        </IconButton>
        {/* <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Заголовок childen</h1>
            <p>hhgj flkdg </p>
            <button type="button" onClick={this.toggleModal}>
              <DeleteIcon /> закрити
            </button>
          </Modal>
        )}
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <TodoEditor onSubmit={this.addTodo}></TodoEditor>
        <br></br>
        <br></br>
        <br></br>
        <Filter value={filter} onChange={this.changeFilter} />
        <br></br>
        <br></br>
        <br></br>
        <Form onSubmit={this.formSubmitHandler}></Form>
        <br></br>
        <br></br>
        <br></br>
        <Tabs items={tabs}></Tabs>
        <br></br>
        <br></br>
        <br></br>
        <Clock></Clock>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
  }
}

export default App;
