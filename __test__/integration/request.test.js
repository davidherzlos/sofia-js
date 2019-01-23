// Request test suite

const http = require('http')
const req = require('../../helpers/request')

// HTTP GET Requests
describe('HTTP GET Requests: ', function () {
  const httpFn = http.get
  const url = 'http://localhost:1337'

  test('User should see a valid response', function () {
    expect.assertions(1)
    return expect(req.fetch(httpFn, url)).resolves.toMatch(/Status Code: 200/)
  })
  
})
