import http from 'http'
import { text } from 'stream/consumers';

const PORT = 8000;

const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.end("<h1>Hello World</h1>");
})

server.listen(PORT, ()=>{
    console.log(`Server started at Porst: ${PORT}`);
});