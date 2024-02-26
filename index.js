import express from "express"
import mongoose from "mongoose"
const methodOverriade = require("method-override")

const app = express()
app.use(methodOverriade("_method"))


const port = process.env.PORT || 5000

app.get('/', (req,res) =>{
    res.send("hello zain server method")
})

mongoose.connect("mongodb+srv://zaindiv:SK7A2fOZbLeJ08Ix@cluster0.32r5dqe.mongodb.net/all-data?retryWrites=true&w=majority")
.then(() =>{
    app.listen(port,() =>{
        console.log(`http://localhost:${port}/`)
    })
})
.catch(() =>{

})