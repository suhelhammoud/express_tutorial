const http = require('http');

http.createServer(function(req, res){
    res.writeHead( 200, {
        // 'Content-Type': 'application/html'
        'Content-Type': 'text/plain'

    });
    res.end('Hello Node !');
    // res.end('{"key":"value"}');
}).listen(3000, 'localhost');

console.log('Server is running at http://localhost:3000/');