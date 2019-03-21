/*
* @TODO Divide responsabilities in this module:
* 1 validate a route, 2 manage routes object
*/

const buildRegister = () => {
  const result = {}
  const routeRegister = (method, path, handler) => {
    result[path] = {
      method: method,
      handler: handler
    }
  }
  routeRegister.all = () => {
    return result
  }
  return routeRegister
}

const register = buildRegister()
module.exports = register
