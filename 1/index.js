var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/hello'] = requestHandlers.hello;

server.start(router.route, handle);
