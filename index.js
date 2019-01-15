const PORT = 1337

const http = require('http')
const server = http.createServer((request, response) => {

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

  response.statusCode = 200
  response.end(`Status Code: ${response.statusCode}`)

})

console.log(`Starting server at port ${PORT}`)
server.listen(PORT)
