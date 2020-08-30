const db = require('monk')(process.env.URI);
const users = db.get('users');

module.exports = users;