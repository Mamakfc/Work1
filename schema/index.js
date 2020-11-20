import { gql } from 'apollo-server-express';
import { argsToArgsConfig } from 'graphql/type/definition';

const user = [
    {
        id: "1",
        username: "Somschi",
        password: "123456",
        email: "somchailnaza@gmail.com",
    },
    {
        id: "2",
        username: "Som1",
        password: "123456",
        email: "som1@gmail.com",
    },
    {
        id: "3",
        username: "Som2",
        password: "123456",
        email: "som2@gmail.com",
    },
    {
        id: "4",
        username: "Som3",
        password: "123456",
        email: "som3@gmail.com",
    },
    {
        id: "5",
        username: "Som4",
        password: "123456",
        email: "som4@gmail.com",
    },
    {
        id: "6",
        username: "Som5",
        password: "123456",
        email: "som5@gmail.com",
    }
]

export const resolvers = {
    Query: {
        user: (parent, arge, context, info) => {
            return user.filter((user) => user.id.toString() === args.id)[0]},
        
        users: (parent, arge, context, info) => { },
    }
}
export const typeDefs = gql`
  type user {
      id: ID!
      name: String!
      username: String!
      password: String!
      email: String!
  }
      type Query{
          user(id:ID!): user
          users:[user]!

      }

`;