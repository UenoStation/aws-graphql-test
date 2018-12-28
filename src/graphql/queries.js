// eslint-disable
// this is an auto generated file. This will be overwritten

export const getInfluencer = `query GetInfluencer($id: ID!) {
  getInfluencer(id: $id) {
    id
    name
    handle
    tags
  }
}
`;
export const listInfluencers = `query ListInfluencers(
  $filter: TableInfluencerFilterInput
  $limit: Int
  $nextToken: String
) {
  listInfluencers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      handle
      tags
    }
    nextToken
  }
}
`;
