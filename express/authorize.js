const authorize=(req,res,next)=>{
    const {user}=req.query
    if(user==='sudharsan'){
        req.user={name:'sudharsan',id:1}
        console.log(req.user)
        next()
    }
    else{
        res.status(401).send('unauthorized')
    }
}

module.exports=authorize