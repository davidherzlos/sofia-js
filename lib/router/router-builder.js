module.exports = (routingMode, routesFile) => {
  const router = routingMode.bind(null, routesFile)
  router.getCachedRoutes = () => {
    return routesFile
  }
  return router
}
