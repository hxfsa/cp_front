import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = "http://localhost:4000";

const client = new ApolloClient({
    uri: API_URL || "/graphql",
    cache: new InMemoryCache(),
    credentials: "include",
  });
  
  export default client;