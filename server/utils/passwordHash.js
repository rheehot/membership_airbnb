const crypto = require('crypto');

const mysalt = 'boostcamp';

module.exports = (password) => crypto
  .createHash('sha512')
  .update(password + mysalt)
  .digest('base64');
