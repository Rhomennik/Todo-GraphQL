import React from "react";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

const httpLink = new HttpLink({
  uri: "https://api.graph.cool/simple/v1/cjww4gk1w6jzf01280jzpvkc5"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const Apollo = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
