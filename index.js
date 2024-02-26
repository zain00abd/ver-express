import express from "express"
import mongoose from "mongoose"

const app = express()

app.get('/', (req,res) =>{
    res.send("hello zain")
})

mongoose.connect("mongodb+srv://zaindiv:SK7A2fOZbLeJ08Ix@cluster0.32r5dqe.mongodb.net/all-data?retryWrites=true&w=majority")
.then(() =>{
    app.listen(5000,() =>{
        console.log(`http://localhost:${5000}/`)
    })
})
.catch(() =>{

})