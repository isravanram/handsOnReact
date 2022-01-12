// This file is responsible for routing the requests

const express=require('express')
const router=express.Router()
// Import the schema created
const signUpTemplateCopy=require('../models/models')

router.post('/signUp',(request,response)=>{

    const signedUser=new signUpTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signedUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

module.exports=router
