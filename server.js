var http = require('http');
var url = require('url');

function start (route, handle) {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname;
        response.writeHead(200, {'Content-type': 'text/plain'});

        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(3000);
}

exports.start = start;