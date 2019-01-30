module.exports = (routingService, routes) => {
  const service = routingService.bind(null, routes)
  service.getCachedRoutes = () => {
    return routes
  }
  return service
}
