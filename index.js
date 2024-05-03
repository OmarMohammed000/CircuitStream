import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.get("/home",(req,res)=>{
    res.render("index.ejs");
})

app.get("/augmented-reality",(req,res)=>{
    res.render("augmentedReality.ejs")
})
app.get("/Quantum-computers",(req,res)=>{
    res.render("q.ejs")
})

app.listen(port , ()=>{
    console.log(`Listening on port ${port}`);
})
