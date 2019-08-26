import React from "react";
import Apollo from "./services/apollo";

import client from "./services/apollo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Apollo client={client}>
      <TodoList />
    </Apollo>
  );
};

export default App;
