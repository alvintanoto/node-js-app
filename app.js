const http = require('http');
var config = require('./config/config');

const server = http.createServer(function(req,res){
    console.log(`request was made ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hey !!');
});

server.listen(config.port, config.base_url);
console.log(`now listening to port ${config.port}`);

