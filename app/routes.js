const express = require('express')
const router = express.Router()

require('./routes/iteration12/routing.js')(router);
require('./routes/HC/iteration10/routing.js')(router);

module.exports = router
