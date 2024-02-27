import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override"; // Corrected typo
import InvoiceModel from './models/datashcema.js';


const app = express();

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const port = process.env.PORT || 5000;
const dbUri = process.env.MONGODB_URI; // Use an environment variable for your MongoDB URI

app.get('/', (req, res) => {
    InvoiceModel.find()
        .then((result) => {
            res.render("index", { arr: result });
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("An error occurred");
        });
});

mongoose.connect("mongodb+srv://zaindiv:SK7A2fOZbLeJ08Ix@cluster0.32r5dqe.mongodb.net/all-data?retryWrites=true&w=majority") // Use the environment variable here
.then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`);
    });
})
.catch((error) => {
    console.error("Database connection failed", error);
});
