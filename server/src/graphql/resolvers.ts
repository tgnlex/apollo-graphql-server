import books from '../../data/books.ts';

const resolvers = {
    Query: {
        books: () => books,
    },
};

export default resolvers;