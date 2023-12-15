const http=require('http');

const server= http.createServer((req,res)=>{
    console.log('user hit the server');
    if(req.url==='/'){
        console.log('user hit the home page')
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        console.log('user hit the about page')
        res.end('Welcome to our about page')
    }
  
})

server.listen(5000)