var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/getTime'] = requestHandlers.getTime;
handle['/'] = requestHandlers.getHTML;

server.start(router.route, handle);