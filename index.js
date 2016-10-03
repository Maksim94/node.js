var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/hello'] = requestHandlers.hello;
handle['/time'] = requestHandlers.time;
// handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);