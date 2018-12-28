// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateInfluencer = `subscription OnCreateInfluencer(
  $id: ID
  $name: String
  $handle: String
  $tags: [String]
) {
  onCreateInfluencer(id: $id, name: $name, handle: $handle, tags: $tags) {
    id
    name
    handle
    tags
  }
}
`;
export const onUpdateInfluencer = `subscription OnUpdateInfluencer(
  $id: ID
  $name: String
  $handle: String
  $tags: [String]
) {
  onUpdateInfluencer(id: $id, name: $name, handle: $handle, tags: $tags) {
    id
    name
    handle
    tags
  }
}
`;
export const onDeleteInfluencer = `subscription OnDeleteInfluencer(
  $id: ID
  $name: String
  $handle: String
  $tags: [String]
) {
  onDeleteInfluencer(id: $id, name: $name, handle: $handle, tags: $tags) {
    id
    name
    handle
    tags
  }
}
`;
