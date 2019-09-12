const http = require('http');
const nodeStatic = require('node-static');

const file = new nodeStatic.Server(`${__dirname}/`);

http.createServer((request, response) => {
    file.serve(request, response);
}).listen(3000);

