const express = require('express')
const router = express.Router()

require('./routes/CarPark/iteration01/routing.js')(router);

require('./routes/iteration12/routing.js')(router);
require('./routes/mmvp/routing.js')(router);

module.exports = router
