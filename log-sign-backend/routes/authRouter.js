const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const User = require("../src/models/userModel")
const {generateToken, verifyToken} = require("../auth/userAuth")
const salting = 10

router.post("/signup", async(req, res)=>{
    try{
        let success = false
        const signupDetails = await req.body
        const presentData = await User.find({email:signupDetails.email})

        if(presentData.length > 0){
            return res.status(403).send({status:"user with this email already exists"})
        }

        const {password} = signupDetails
        if(password){
            success = true
            const hashedPassword = await bcrypt.hash(password, salting)
            let authToken = generateToken(signupDetails)
            await User({...signupDetails, password:hashedPassword}).save()
            res.status(201).send({success, authToken})
        }else{
            res.status(403).send({status:"error occured while logging in"})
        }
    }catch(err){
        console.log(err.message)
        res.status(500).send({status:"failed to signup"})
    }
})

router.post("/signin", async (req, res)=>{
    const {email, password} = await req.body
    const detailFromDB = await User.findOne({email})
    let success = false
    if(detailFromDB){
        console.log("signin")
        const isValid = await bcrypt.compare(password, detailFromDB.password)
        if(isValid){
            success = true
            const authToken = generateToken(detailFromDB)
            res.status(200).send({success, authToken})
        }else{
            const authToken = null
            res.status(500).send({success, authToken})
        }
    } 
})

router.get("/dashboard", verifyToken, (req, res)=>{
    res.send(req.authData)
})


module.exports = router