var exec = require('child_process').exec;

function hello (response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Ok");
    response.end();
}

function time (response) {
    console.log("Request handler 'time' was called.");

    exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
}

exports.hello = hello;
exports.time = time;