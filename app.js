const http = require('http'); //server
var config = require('./config/config'); //config
var fs = require('fs'); //file or folder 

/* create a server 

const server = http.createServer(function(req,res){
    console.log(`request was made ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hey !!');
});

server.listen(config.port, config.base_url);
console.log(`now listening to port ${config.port}`);
*/
 

/* read and write stream

var myReadStream = 
    fs.createReadStream(`${__dirname}/readme.txt`, `utf8`);
var myWriteStream = 
    fs.createWriteStream(`${__dirname}/writeme.txt`);

myReadStream.on('data', function(chunk){
    console.log(`new chunk received`);
    console.log(chunk);
    myWriteStream.write(chunk);
}) 
*/


/* pipe

myReadStream.pipe(myWriteStream);
 */


 /* server and pipe */

const server = http.createServer(function(req,res){
    console.log(`request was made ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'})
    var myReadStream = 
        fs.createReadStream(`${__dirname}/readme.txt`, `utf8`);
    myReadStream.pipe(res);
});

server.listen(config.port, config.base_url);
console.log(`now listening to port ${config.port}`);
