var fs = require('fs');

function getTime (response) {
    var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(hours + ':' + minutes);
}

function getHTML (response, pathname) {
    fs.readFile('index.html', function (err, data){
        if (err) {
            response.end("File wasn't found");
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(data);
    });
}

function getCSS (response, pathname) {
    fs.readFile(pathname.slice(1), function (err, data){
        if (err) {
            response.end("File wasn't found");
        }
        response.writeHead(200, {"Content-Type": "text/css"});
        response.end(data);
    });
}

function getJS (response, pathname) {
    fs.readFile(pathname.slice(1), function (err, data){
        if (err) {
            response.end("File wasn't found");
        }
        response.writeHead(200, {"Content-Type": "text/javascript"});
        response.end(data);
    });
}

exports.getTime = getTime;
exports.getHTML = getHTML;
exports.getCSS = getCSS;
exports.getJS = getJS;
