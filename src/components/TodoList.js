import React from "react";

import Loading from "./Loading";

import { useQuery } from "@apollo/react-hooks";
import { TodosQuery } from "./todo.queries";

const TodoList = () => {
  const { data } = useQuery(TodosQuery);

  return (
    <div>
      {data.allTodoes === undefined ? (
        <Loading />
      ) : (
        <ul>
          {data.allTodoes.map(allTodoes => (
            <li key={allTodoes.id}>{allTodoes.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
