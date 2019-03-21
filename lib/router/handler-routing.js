module.exports = (routes, requestData) => {
  const matchingRoute = routes.filter(route => route.url === requestData.url)[0]
  const matchingAction = matchingRoute
    ? matchingRoute.action
    : () => `Action for: '${requestData.url}' Not found`
  return matchingAction
}
