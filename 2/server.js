var http = require('http');
var url = require('url');
var fs = require('fs');

function start (route, handle) {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname;

        route(handle, pathname, response);
    }
    http.createServer(onRequest).listen(3000);
}

exports.start = start;