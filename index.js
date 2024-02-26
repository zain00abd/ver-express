import express from "express"

const app = express()

app.get('/', (req,res) =>{
    res.send("hello zain")
})

app.listen(5000, ()=>{
    console.log("connect to server")
})