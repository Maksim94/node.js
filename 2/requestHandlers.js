//var exec = require('child_process').exec;
var fs = require('fs');

function getTime (response) {
    console.log("Request handler 'time' was called.");
    var time = new Date();

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(time.getHours() + ':' + time.getMinutes());
    response.end();


    /*exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });*/
}

function getHTML (response) {
    fs.readFile('index.html', function (err, data){
        if (err) {
            response.end("File wasn't found");
        }
        response.end(data);
    });
}

exports.getTime = getTime;
exports.getHTML = getHTML;
