const routerComposer = require('../../lib/router-composer')
const routingToAction = require('../../lib/route-service/routeToAction')
const routesFile = require('../../routes')

var router

describe('Router service Test suite', () => {
  beforeEach(() => {
    router = routerComposer(routingToAction, routesFile)
  })

  test('It should load a routes file', () => {
    const cachedRoutes = router.getCachedRoutes()
    expect(cachedRoutes).toBe(routesFile)
  })

  test('It should route to a user defined route action', () => {
    const requestData = {
      method: 'GET',
      url: '/metal-bands-that-i-love'
    }

    const cachedRoutes = router.getCachedRoutes()
    const validCallback = cachedRoutes[0].action

    const actionCallback = router(requestData)
    expect(actionCallback).toBe(validCallback)
  })

  test('It should route a default response if route is not valid', () => {
    const requestData = {
      method: 'GET',
      url: '/animals/tiger'
    }

    const actionCallback = router(requestData)
    expect(actionCallback()).toMatch(/Not found/)
  })
})
