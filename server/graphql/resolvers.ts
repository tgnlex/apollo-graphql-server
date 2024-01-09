
const resolvers = {
  SearchResult: {
    __resolveType(obj, contextValue, info){
    if (obj.name) {
      return "User";
    }
    if (obj.title) {
        return "Post";
    }
  }
},
Query: {
  search: () => {}
    },
};

export default resolvers;