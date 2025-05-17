import http from 'http'
import dotenv from 'dotenv';

// dotenv.config()
const PORT = process.env.PORT;

const server = http.createServer((req, res) =>{
    // res.setHeader('Content-Type', 'text/html');
    // const statusCode = 404;

    res.writeHead(404, {'Content-Type': 'application/JSON'});

    res.end(JSON.stringify({message: 'Free Palestine'}));
})

server.listen(PORT, ()=>{
    console.log(`Server started at Port: ${PORT}`);
});