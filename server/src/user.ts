export const data = /* GraphQL */ `
  type Query {
    me: User!
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  type User {
    id: ID!
    name: String!
    lastName: String
    """
    this should error
    """
    vehicles: [Int]!
  }

  input CreateUserInput {
    name: String!
    lastName: String
  }
`
