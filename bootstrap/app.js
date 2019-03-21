// Routes
const routes = require('../routes')
console.log(routes)

// Router
const router = require('../lib/router')(routes)

module.exports = {
  router: router
}
