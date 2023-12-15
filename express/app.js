const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    console.log('user hit the server');
    res.status(200).send('Welcome to our home page')
})

app.get('/about',(req,res)=>{
    console.log('user hit the about page');
    res.status(200).send('<h1>Welcome to our about page</h1>')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening on port http://localhost:5000')
})