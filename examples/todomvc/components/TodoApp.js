import React, { Component } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class TodoApp extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

export default TodoApp;
