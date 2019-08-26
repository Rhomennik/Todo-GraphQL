import gql from "graphql-tag";

export const TodosQuery = gql`
  query {
    allTodoes {
      id
      text
    }
  }
`;
