function route (handle, pathname, response) {
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Ne Ok, input hello.");
        response.end();
    }
}

exports.route = route;