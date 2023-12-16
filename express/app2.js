const express= require('express')

const app=express()
const pro = require('./data.js')
const { isNull } = require('lodash')

app.get('/',(req,res)=>{
    res.json(pro)
})
app.get('/api/peoples',(req,res)=>{
    const {id,name}=pro['people']
    res.json(pro['people'])
})

app.get('/api/peoples/:id',(req,res)=>{
    const {id}=req.params
    if(!isNaN(id))
    {
        const single=pro['people'].find((person)=>person.id===Number(id))
        if(!single){
            return res.status(404).send('person not found')
        }
        return res.json(single)
    }
    else{
        return res.status(404).send('Try to get the id with number')
    }
})

app.listen(5000,()=>{
    console.log('server is listening on port http://localhost:5000')
})