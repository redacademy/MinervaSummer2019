import {ApolloClient, InMemoryCache, HttpLink} from 'apollo-client-preset';
import {split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/ck046a89w0kut01791rwn3vw9',
});

const wsLink = new WebSocketLink({
  uri: `wss://subscriptions.us-west-2.graph.cool/v1/ck046a89w0kut01791rwn3vw9`,
  options: {
    reconnect: true,
  },
});

const isSubscription = gqlOperation => {
  const {kind, operation} = getMainDefinition(gqlOperation.query);
  return kind === 'OperationDefinition' && operation === 'subscription';
};

const link = split(isSubscription, wsLink, httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
export default client;
