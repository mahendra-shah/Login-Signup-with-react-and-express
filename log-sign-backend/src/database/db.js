const mongoose = require("mongoose")

const connectMongo = ()=>{
    mongoose.connect("mongodb://localhost:27017/Log-Sign-datastore").then(()=>{
        console.log("connected to mongo")
    }).catch(err=>{
        console.log(err.message)
    })
}

module.exports = connectMongo