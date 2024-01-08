import { ApolloServer} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './schema.ts';
import resolvers from './resolvers.ts';

export const graphServer = new ApolloServer({
 typeDefs, 
 resolvers,
});

async function startApollo() {
    const {url} = await startStandaloneServer(graphServer, {
    listen: { port: 5000 },
});
console.log(`[Apollo]: Graphql Server ready at:${ url }`)
}

export default startApollo;