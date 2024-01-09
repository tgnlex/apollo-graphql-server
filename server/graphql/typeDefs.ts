import GraphQLJSON from 'graphql-type-json';
const typeDefs  = `
  scalar JSON
  
  type User {
  id : ID! 
  name: String!
  email: String!
  passsword: String!
  avatar: Avatar
}

type Avatar {
  owner: User!
  url: String!  
  border: BorderColor
}

type Message {
  time_sent: Timestamp!
  content: String!
  sender: User!
  receiver: User!
}

type Timestamp {
  date: String!
  time: String!
}

type Post {
  id: ID!
  content: PostContent!
  owner: User  
  comments: [Comments]
  likes: Int!
}

type Comments { 
  id: ID!
  content: CommentContent!
  parent: Post
  owner: User
}

type Event {
  id: ID!
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

union SearchResult = User | Post



type Query {
    search(contains: String): [SearchResult!]
    getUser: User
    allUsers: [User]

    getPost: Post 
    allPosts: [Post]

    getComment: Comment
    allComments: [Comment]
}

interface MutationResponse {
  code: String!
  success: Boolean!
  message: String!
}

type createUserMutationResponse implements MutationResponse { 
  code: String!
  success: String!
  message: String!
  user: User
}

type createPostMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  post: Post
}

type createCommentMutationResponse implements MutationResponse { 
  code: String!
  success: Boolean!
  message: String!
  comment: Comment
}

type createEventMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  event: Event
}
type updateEventMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  event: Event
}
type updateUserNicknameMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  user: User
}

type updateUserEmailMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  user: User
}

type updateUserAvatarMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  user: User
  avatar: Avatar
}

updatePostMutationResponse implements MutationResponse {
  code: String!
  succesS: Boolean!
  message: String!
  post: Post
}

updateCommentMutationResponse implements MutationResponse { 
  code: String!
  success: Boolean!
  message: String!
  comment: Comment
}

type LikePostMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  post: Post
  user: User
}



type Mutation {
  createUser(nickname: String!, email: String!, password: String!, avatar: Avatar): User
  
  updateUserNickname(id: ID!, nickname: String!): User
  updateUserEmail(id: ID!, email: String!): User
  updateUserAvatar(id: ID!, avatar: Avatar): User

  createPost(content: PostContent!): Post
  createComment(content: CommentContent!): Comment
  createEvent(name: String!, date: String!, location: Location): Event
  
  updatePost(id: ID!, content: PostContent!): Post
  updateComment(id: ID!, content: CommentContent!) Content
  updateEventLocation(id: ID!, location: Location)
  deletePost(id: ID!): Post
  deleteComment(id: ID!): Comment
}

`;

export default typeDefs;