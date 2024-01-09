import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
});

export default schema;
