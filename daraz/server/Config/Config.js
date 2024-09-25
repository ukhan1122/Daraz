const crypto = require('crypto');
const jwtscret = crypto.randomBytes(32).toString('hex');
console.log('Generated Secret:', jwtscret); // For debugging
module.exports = { jwtscret };
