const routerBuilder = require('./router-builder')
const handlerRouting = require('./handler-routing')
const router = routerBuilder.bind(null, handlerRouting)
module.exports = router
