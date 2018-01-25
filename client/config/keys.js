// keys.js
if (process.env.NODE_ENV === 'production') {
  /* eslint-disable global-require */
  module.exports = require('./prod');
} else {
  // eslint-disable-line global-require
  module.exports = require('./dev');
}
