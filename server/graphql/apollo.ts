import { ApolloServer} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import express from 'express'
import schema from './schema.ts';

async function startApollo() {
  const graphServer = new ApolloServer({
    schema
  });
    const {url} = await startStandaloneServer(graphServer, {
    listen: { port: 5000 },
});
console.log(`[Apollo]: Graphql Server ready at:${ url }`)
}

export default startApollo;