module.exports = (routes) => {
  const routerService = (requestData) => {
    const matchingRoute = routes.filter(route => route.url === requestData.url)[0]
    return matchingRoute ? matchingRoute.action : () => `Handler for: '${requestData.url}' Not found`
  }

  routerService.getCachedRoutes = () => {
    return routes
  }
  return routerService
}
