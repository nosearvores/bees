const NODE_ENV = process.env.NODE_ENV || 'production'

module.exports = settings => {
  const env = settings.env || NODE_ENV

  return {
    projectType: 'react',
    pageTitle: 'Bees Database',
    env: env
  }
}
