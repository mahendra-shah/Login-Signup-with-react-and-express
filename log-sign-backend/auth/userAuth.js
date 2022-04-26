const jwt = require("jsonwebtoken")
const User = require("../src/models/userModel")
const secret = "mahendra-sajjad"


exports.generateToken = ({id})=>{
    console.log("h")
    return jwt.sign({id}, secret)
}

exports.verifyToken = async(req, res, next)=>{
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjdjYmY4MDBiMTVjMDJiMzE0MzQxZCIsImlhdCI6MTY1MDk3MzI3Nn0.NT1gUYlqhDzRpw0B818DKKkbEl_zAr2R3LZIHPN2-l8"
    if(authToken){
        const id = jwt.verify(authToken, secret)
        const authData = await User.findById(id.id)
        req.authData = authData;
    }else{
        res.send({status:"failure while authenticating"})
    }
    next()
}