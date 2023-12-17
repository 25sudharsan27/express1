const express = require('express')
const app=express()
const logger=require('./logger')
const authorize=require('./authorize')
//middleware
// const logger=(req,res,next)=>{
//     const method=req.method
//     const url=req.url
//     const time=new Date().getFullYear()
//     console.log(method,url,time)
//     // res.send('testing')
//     next()
// }
app.use('/',logger)
app.use('/about',authorize)

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})
app.listen(5000,()=>{
    console.log("server is listening on port http://localhost:5000")
})