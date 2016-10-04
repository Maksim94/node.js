var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/getTime'] = requestHandlers.getTime;
handle['/'] = requestHandlers.getHTML;
handle['/styles/style.css'] = requestHandlers.getCSS;
handle['/js/main.js'] = requestHandlers.getJS;
handle['/js/getTime.js'] = requestHandlers.getJS;

server.start(router.route, handle);