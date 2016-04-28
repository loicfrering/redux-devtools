import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MyTodoApp from './MyTodoApp';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <MyTodoApp />
      </Provider>
    );
  }
}
