function hello (response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Ok");
    response.end();
}

exports.hello = hello;
