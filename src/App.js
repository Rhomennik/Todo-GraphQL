import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

import client from "./services/apollo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <TodoList />
    </ApolloProvider>
  );
};

export default App;
