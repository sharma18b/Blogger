const http = require('http');
const server = http.createServer((req,res) => {
    console.log('request made');
} );

server.listen(3000,'localhost',() => {
console.log('server started listening');
}
);
