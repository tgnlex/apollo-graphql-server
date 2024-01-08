const typeDefs  = `
type Book {
    title: String
    author: String
    publisher: String
    year: Int
}
type Query {
    books: [Book]
}

`;

export default typeDefs;