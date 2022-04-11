const express = require('express')
const router = express.Router()

require('./routes/iteration12/routing.js')(router);
require('./routes/iteration13/routing.js')(router);
require('./routes/mvp/routing.js')(router);
require('./routes/mmvp/routing.js')(router);

require('./routes/HC/iteration10/routing.js')(router);
require('./routes/HC/iteration11/routing.js')(router);
require('./routes/HC/iteration12/routing.js')(router);

//require('./routes/CarPark/iteration01/routing.js')(router);
require('./routes/CarPark/iteration02/routing.js')(router);
require('./routes/CarPark/iteration03/routing.js')(router);

module.exports = router
