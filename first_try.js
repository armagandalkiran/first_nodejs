require('dotenv').config()
const http = require('http');

const hostname = process.env.HOST
const port = process.env.PORT
// const hostname = '127.0.0.1';
// const port = 3000;
const city = process.env.CITY
const name = process.env.NAME
const age = process.env.AGE

const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end(`${city},${age},${name}`);
   });
   
   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });