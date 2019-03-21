/*
* @TODO Divide responsabilities in this module:
* 1 validate a route, 2 manage routes object
*/

module.exports = {
  routesObject: {},
  add: function (method, path, handler) {
    this.routesObject[path] = {
      method: method,
      handler: handler
    }
    return this
  },
  dump: function () {
    return this.routesObject
  }
}
