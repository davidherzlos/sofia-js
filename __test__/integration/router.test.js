const preRouter = require('../../lib/router')
const routes = require('../../routes')
var router

describe('Router service Test suite', () => {
  beforeEach(() => {
    router = preRouter(routes)
  })

  test('It should load a routes file', () => {
    const cachedRoutes = router.getCachedRoutes()
    expect(cachedRoutes).toBe(routes)
  })

  test('It should route to a user defined route handler', () => {
    const requestData = {
      path: '/metal-bands-that-i-love'
    }

    const cachedRoutes = router.getCachedRoutes()
    const validCallback = cachedRoutes[requestData.path].handler

    const actionCallback = router(requestData)
    expect(actionCallback).toBe(validCallback)
  })

  test('It should route a default response if route is not valid', () => {
    const requestData = {
      path: '/muaaa'
    }

    const actionCallback = router(requestData)
    expect(actionCallback()).toMatch(/Not found/)
  })
})
