module.exports = (routes, requestData) => {
  const matchingHandler = routes[requestData.path]
    ? routes[requestData.path].handler
    : routes['default'].handler

  return matchingHandler
}
