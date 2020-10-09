import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://xs5a5z94el.execute-api.eu-west-1.amazonaws.com/prod/graphql',
  cache: new InMemoryCache(),
});
