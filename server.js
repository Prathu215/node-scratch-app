// These are same like import statements for front end frameworks
const http = require('http');
const app = require('./app');

//We have to provide a port number to process in the server
const port = process.env.PORT || 3000;

//Creating the server which is taking app(express) to print the msg
const server = http.createServer(app);

server.listen(port);
// server.listen(port,console.log(`server is listening to port ${port}..`));
// This is to check for console log whether port is running or not?

