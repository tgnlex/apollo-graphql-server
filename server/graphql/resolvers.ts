import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const resolvers = {
    Query: {
        getUser: () => Users,
        allUsers: () => [Users], 
    },
};

export default resolvers;