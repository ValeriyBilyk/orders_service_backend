const company = require('./company');

module.exports = {
  apply: applyRoutes
};

function applyRoutes(app) {
  app.use('/', company);
}
