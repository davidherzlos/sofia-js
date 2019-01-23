const http = require('http')
const req = require('../../helpers/request')
const route = require('../../routes')[0].url

// Http Get requests test suite
describe('Http Get requests: ', () => {
  const httpFn = http.get
  const url = 'http://localhost:1337'

  test('User should see a valid response', () => {
    expect.assertions(1)
    return expect(req.fetch(httpFn, url)).resolves.toMatch(/Status Code:/)
  })

  test('User should a routed response', () => {
    expect.assertions(1)
    return req.fetch(httpFn, url + route).then(result => {
      expect(result).toMatch(route)
    })
  })
})
