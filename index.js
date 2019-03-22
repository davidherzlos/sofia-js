const { router } = require('./bootstrap/app')
const http = require('http')

const { PORT } = require('./config')

const server = http.createServer((request, response) => {
  const { url, method } = request

  // collect request data, method, url, headers, body if any
  // console.log(request.url)
  // console.log(request.method)
  // console.log(request.headers)
  // console.log(request.statusCode)

  // parse url
  // match to defined route
  // redirect to action or controller
  // create response data o view
  // send response

  try {
    const actionCallback = router({ path: url })
    const responseData = actionCallback()
    console.log(responseData)
    response.write(responseData)
    response.statusCode = 200
    response.write('\n')
    response.write(`Status Code: ${response.statusCode}\n`)
    response.end()
  } catch (error) {
    response.statusCode = 500
    response.write('\n')
    response.write(`Status Code: ${response.statusCode}\n`)
    response.end()
  }
})

console.log(`Starting server at port ${PORT}`)
server.listen(PORT)
