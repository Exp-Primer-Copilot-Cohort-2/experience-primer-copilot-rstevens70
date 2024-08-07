// Create web server
// 1. Create a server
// 2. Create a route
// 3. Create a response
// 4. Listen to the server

// 1. Create a server
const http = require('http');
const server = http.createServer((req, res) => {
    // 2. Create a route
    if (req.url === '/comments') {
        // 3. Create a response
        res.write('Comments page');
        res.end();
    }
    if (req.url === '/posts') {
        res.write('Posts page');
        res.end();
    }
});

// 4. Listen to the server
server.listen(3000);
console.log('Server listening');