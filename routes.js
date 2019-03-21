const routes = require('./lib/routes-parser')
/*
* Routes should be here
*/

routes
  .add('get', '/metal-bands-that-i-love', () => { return '/metal-bands-that-i-love' })
  .add('get', 'default', () => { return 'Route Not found' })

/* Routes should end here */
module.exports = routes.dump()
