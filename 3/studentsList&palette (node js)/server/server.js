var http = require('http');
var url = require('url');
var fs = require('fs');
var baseRoot = '../client';

function onRequest (request, response) {
    var pathname = url.parse(request.url).pathname;

    if (pathname.indexOf('.html') != -1) {
        fs.readFile('client/index.html', function (err, data){
            if (err) {
                response.end("File wasn't found");
            }

            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(data);
        });
    } else if (pathname.indexOf('.css') != -1) {
        fs.readFile(baseRoot + pathname, function (err, data) {
            if (err) {
                response.end("File wasn't found");
            }
            response.writeHead(200, {"Content-Type": "text/css"});
            response.end(data);
        });
    } else if (pathname.indexOf('.js') != -1) {
        fs.readFile(baseRoot + pathname, function (err, data) {
            if (err) {
                response.end("File wasn't found");
            }
            response.writeHead(200, {"Content-Type": "text/javascript"});
            response.end(data);
        });
    } else if (pathname === '/getStudents') {
        fs.readFile(baseRoot + '/app/studentsList/students.json', function (err, data) {
            if (err) {
                response.end("File wasn't found");
            }
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end(data);
        });
    } else if (pathname.indexOf('/') != -1) {
        fs.readFile(baseRoot + '/index.html', function (err, data) {
            if (err) {
                response.end("File wasn't found");
            }

            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(data);
        });
    }
}

http.createServer(onRequest).listen(3000);

console.log('Server is started');
