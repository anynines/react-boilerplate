const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common')
const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')

const HANDLED_ENVS = ['dev', 'prod'] // add here the environments you are handling

module.exports = env => {
  const isEnvValid = HANDLED_ENVS.includes(env)

  if (!isEnvValid) {
    console.error(`Given environment '${env}' isn't supported. Please use one of these: ${HANDLED_ENVS.join(', ')}.`)
    process.exit(1)
  }

  switch (env) {
    case 'dev':
      return merge(commonConfig, devConfig);

    case 'prod':
      return merge(commonConfig, prodConfig);
  }
}