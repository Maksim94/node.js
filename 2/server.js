var http = require('http');
var url = require('url');
//var fs = require('fs');

/*var str;

fs.readFile('index.html', function (err, data) {
    if (err) {
        throw err;
    } else {
        str = data.toString('utf-8');
    }
});*/

function start (route, handle) {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname;
        response.writeHead(200, {'Content-type': 'text/plain'});

        

        //response.write(str);

        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(3000);
}

exports.start = start;