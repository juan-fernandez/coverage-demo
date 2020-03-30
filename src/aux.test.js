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
    test('it returns an empty string if there is no source root', () => {
      const agent = {
        tags: [
          {
            key: 'not.source.root',
            value: JSON.stringify('sourceRootValue'),
          },
        ],
      }
      const result = getSourceRootFromAgent(agent)
      expect(result).toEqual('')
    })
    test('it returns an empty string if input is invalid', () => {
      const badagent1 = {}
      const badagent2 = {
        tags: null,
      }
      const badagent3 = {
        tags: {},
      }
      const badagent4 = []
      const badagent5 = undefined
      let result = getSourceRootFromAgent(badagent1)
      expect(result).toEqual('')
      result = getSourceRootFromAgent(badagent2)
      expect(result).toEqual('')
      result = getSourceRootFromAgent(badagent3)
      expect(result).toEqual('')
      result = getSourceRootFromAgent(badagent4)
      expect(result).toEqual('')
      result = getSourceRootFromAgent(badagent5)
      expect(result).toEqual('')
    })
  })
})
