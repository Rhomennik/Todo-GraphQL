import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apollo';
import TodoList from './components/TodoList';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <TodoList />
      </ApolloProvider>
    );
  }
}
