const routerComposer = require('../lib/router-composer')
const routingToAction = require('../lib/route-service/routeToAction')
const routesFile = require('../routes')
module.exports = {
  router: routerComposer(routingToAction, routesFile)
}
