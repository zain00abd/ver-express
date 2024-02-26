import express from "express"
import mongoose from "mongoose"
import methodOverriade from "method-override"
import InvoiceModel from './models/datashcema.js';


const app = express()

app.use(methodOverriade("_method"))
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


const port = process.env.PORT || 5000

app.get('/', (req, res) => {

    InvoiceModel.find()
        .then((result) => {
            res.render("index", { arr: result });
            console.log(result)

        })
        .catch((error) => {
            console.error(error);
        });
});

mongoose.connect("mongodb+srv://zaindiv:SK7A2fOZbLeJ08Ix@cluster0.32r5dqe.mongodb.net/all-data?retryWrites=true&w=majority")
.then(() =>{
    app.listen(port,() =>{
        console.log(`http://localhost:${port}/`)
    })
})
.catch(() =>{

})