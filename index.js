import express from "express"
import mongoose from "mongoose"

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req,res) =>{
    res.send("hello zain server")
})

mongoose.connect("mongodb+srv://zaindiv:SK7A2fOZbLeJ08Ix@cluster0.32r5dqe.mongodb.net/all-data?retryWrites=true&w=majority")
.then(() =>{
    app.listen(port,() =>{
        console.log(`http://localhost:${port}/`)
    })
})
.catch(() =>{

})