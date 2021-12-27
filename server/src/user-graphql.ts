export const data = /* GraphQL */ `
  """
  desc
  """
  type Query {
    me: User!
  }

  """
  desc
  """
  input Test {
    name: String!
  }
  """
  description
  """
  type User {
    id: ID!
    name: String!
    lastName: String
    """
    this should error
    """
    vehicles: [Int]!
  }
`
