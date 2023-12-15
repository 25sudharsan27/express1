const http=require('http');

const server = http.createServer((req,res)=>{
    console.log(req.method)
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>hello world</h1>')
        res.end('<h1>home page</h1>')   
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>You are in about page</h1>")
        res.end();
    }
    else if(req.url===''){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("<h1>You are in about page</h1>")
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>page not found</h1>')
        res.end();
    }
    
    
})
server.listen(5000,()=>{
    console.log('server is listening on port http://localhost:5000...')
})