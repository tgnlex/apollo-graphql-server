
const typeDefs  = `

type Event {
  name: String!
  date: String!
  location: Location
}
type Location {
  name: String!
  weather: WeatherInfo
}
type WeatherInfo {
  temperature: Float
  description: String
}

type User {
  id: ID!
  nickname: String!
  email: String!
  passsword: String!
  avatar: Avatar
}

type Avatar {
  owner: User!
  url: String!  
  border: BorderColor
}

type Post {
  id: ID!
  content: PostContent!
  owner: User  
  comments: [Comments]
}

type Comments { 
  id: ID!
  content: CommentContent!
  parent: Post
  owner: User
}

input CommentContent {
  body: String
  media: [MediaDetails!]
}

input PostContent {
  title: String
  body: String
  media: [MediaDetails!]
}

input MediaDetails {
  format: MediaFormat!
  url: String!
}

enum MediaFormat {
  IMAGE 
  VIDEO
  SOUND
}

enum BorderColor {
  RED
  GREEN
  BLUE
  BLACK
  PINK
  PURPLE
  GOLD
  ORANGE
}

type Query {
    getUser: User
    allUsers: [User]

    getPost: Post 
    allPosts: [Post]

    getComment: Comment
    allComments: [Comment]
}

type Mutation {
  createUser(nickname: String!, email: String!, password: String!, avatar: Avatar)
  
  createPost(content: PostContent!): Post
  createComment(content: CommentContent!): Comment
  
  updatePost(id: ID!, content: PostContent!): Post
  updateComment(id: ID!, content: CommentContent!) Content
  
  deletePost(id: ID!): Post
  deleteComment(id: ID!): Comment
}

`;

export default typeDefs;