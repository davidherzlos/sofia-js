// Routes
const routes = require('../routes')

// Router
const router = require('../lib/router')(routes)

module.exports = {
  router: router
}
