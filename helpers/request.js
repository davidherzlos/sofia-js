// Async fetch utility to create http and https requests

const fetch = (func, input) => {
  return new Promise((resolve, reject) => {
    func(input, (response) => {
      response.setEncoding('utf8')
      const { statusCode, headers } = response
      const contentType = headers['content-type']

      if (statusCode !== 200) {
        response.resume()
        reject(
          new Error(`Request failed: \n status-code: ${statusCode}, content-type: ${contentType}`)
        )
      }

      let rawData = ''
      response.on('data', (chunk) => { rawData += chunk })
      response.on('end', () => { resolve(rawData) })
    })
  })
}

module.exports.fetch = fetch
