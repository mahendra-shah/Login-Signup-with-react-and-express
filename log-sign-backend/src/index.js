const express = require("express")
const app = express()
const AuthRouter = require("../routes/authRouter")
const connectMongo = require("./database/db")
const port = 3333

connectMongo()
app.use(express.json())
app.use("/auth/user", AuthRouter)

app.listen(port, ()=>{
    console.log("connected to express server...")
})