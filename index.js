var http = require('http');
var fs = require('fs');
var port = 8000;
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    // response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    }
    else {
        response.statusCode = 404;
        response.write('<img src="https://www.interserver.net/tips/wp-content/uploads/2016/10/404error.jpeg"></img>');
        response.end();
        // fs.readFile('./404error.jpeg', function(err, data) {
        //     if (err) {
        //         throw err;
        //     }
        //     response.write(data);
        //     response.end();
        // })
    }
});

server.listen(port, () => console.log('listening', port));
