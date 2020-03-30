module.exports = {
  getSourceRootFromAgent: agent => {
    if (!agent) {
      return ''
    }
    const agentTags = agent.tags || []
    if (!agentTags || !agentTags.length) {
      return ''
    }
    const sourceRoot = agentTags.find(tag => tag.key === 'source.root')

    if (sourceRoot && sourceRoot.value) {
      try {
        return JSON.parse(sourceRoot.value)
      } catch {
        return sourceRoot.value
      }
    }

    return ''
  },
}
