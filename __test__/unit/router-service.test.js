const router = require('../../router')
var routes
var routerService

describe('Router service Test suite', () => {
  beforeEach(() => {
    routes = [{
      method: 'GET',
      url: '/some-custom-get-route',
      action: () => 'Hello world'
    }]

    routerService = router(routes)
  })

  test('It should load a routes file', () => {
    const cachedRoutes = routerService.getCachedRoutes()
    expect(cachedRoutes).toBe(routes)
  })

  test('It should route a user defined route action', () => {
    const requestData = {
      method: 'GET',
      url: '/some-custom-get-route'
    }

    const cachedRoutes = routerService.getCachedRoutes()
    const validCallback = cachedRoutes[0].action

    const actionCallback = routerService(requestData)
    expect(actionCallback).toBe(validCallback)
  })

  test('It should route a default response if route is not valid', () => {
    const requestData = {
      method: 'GET',
      url: '/animals/tiger'
    }

    const actionCallback = routerService(requestData)
    expect(actionCallback()).toMatch(/Not found/)
  })
})
