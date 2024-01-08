import { PrismaClient } from '@prisma/client';
import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const prisma = new PrismaClient();

const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
});

export default schema;
