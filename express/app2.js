const express= require('express')

const app=express()
const {people,products} = require('./data')
const { isNull } = require('lodash')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/peoples">people</a>')
})
app.get('/api/peoples',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,order,title}=product;
        return {id,order,title}
    })
    res.json(newProducts);
    console.log(newProducts)
})

app.get('/api/peoples/:id',(req,res)=>{
    const {id}=req.params
    const val=people.find((person)=>person.id===Number(id))
    if(!val){
        return res.status(404).send('person not found')
    }
    return res.json(val)
})
// app.get('/api/peoples/:id',(req,res)=>{
//     const {id}=req.params
//     if(!isNaN(id))
//     {
//         const single=pro['people'].find((person)=>person.id===Number(id))
//         if(!single){
//             return res.status(404).send('person not found')
//         }
//         return res.json(single)
//     }
//     else{
//         return res.status(404).send('Try to get the id with number')
//     }
// })

app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query;
    let sortedProducts=[...pro['people']];
    console.log(req.query);
    res.json(req.query);
})

app.listen(5000,()=>{
    console.log('server is listening on port http://localhost:5000')
})