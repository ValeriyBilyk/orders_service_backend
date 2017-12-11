const user = require('./user');
const company = require('./company');

module.exports = {
  user,
  apply: applyRoutes
};

function applyRoutes(app) {
  app.use('/', user);
  app.use('/', company);
}
