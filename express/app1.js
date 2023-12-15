const express=require('express')
const path=require('path');
const app=express();


app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
    console.log('user hit the server')
})

app.get('*',(req,res)=>{
    res.status(404).send('Page not found')
})

app.listen(5000,()=>{
    console.log("server is running in port http://localhost:5000")
})