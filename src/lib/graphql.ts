// For now, we'll export a dummy client
export const graphQLClient = {
  request: async () => ({
    posts: {
      nodes: []
    }
  })
}; 