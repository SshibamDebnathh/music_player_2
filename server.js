const http = require('http')
const fs = require('fs')


const fileContent = fs.readFileSync('index.html')

const server = http.createServer((req,res)=>{
    // res.statusCode = 200;
    // res.setHeader('Content-Type')
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fileContent)
})

server.listen(80,'127.0.0.1',()=>{
    console.log(`Server running at port 80`);
})

