const Route = require('./lib/routes-reader')

/*
* Routes should be registed here
*/

Route('get', '/metal-bands-that-i-love', () => '/metal-bands-that-i-love')
Route('get', '/jazz-band-i-play', () => '/jazz-band-i-play')
Route('get', '/sample', 'sampleHandler')

// Export routes object
module.exports = Route.all()
