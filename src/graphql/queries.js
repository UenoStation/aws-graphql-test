// eslint-disable
// this is an auto generated file. This will be overwritten

export const getInfluencer = `query GetInfluencer($id: ID!) {
  getInfluencer(id: $id) {
    id
    name
    handle
  }
}
`;
export const listInfluencers = `query ListInfluencers(
  $filter: ModelInfluencerFilterInput
  $limit: Int
  $nextToken: String
) {
  listInfluencers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      handle
    }
    nextToken
  }
}
`;
