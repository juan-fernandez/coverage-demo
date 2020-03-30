const { getSourceRootFromAgent } = require('./aux')

describe('aux', () => {
  describe('getSourceRootFromAgent', () => {
    test('it gets the source root from the agent', () => {
      const agent = {
        tags: [
          {
            key: 'source.root',
            value: JSON.stringify('sourceRootValue'),
          },
        ],
      }
      const result = getSourceRootFromAgent(agent)
      expect(result).toEqual('sourceRootValue')
    })
  })
})
