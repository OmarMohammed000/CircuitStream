import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});


app.get("/augmented-reality",(req,res)=>{
    res.render("augmentedReality.ejs")
});
app.get("/Quantum-computers",(req,res)=>{
    res.render("q.ejs")
});
app.get("/blogCreation",(req,res)=>{
    res.render("blog-creation.ejs")
});
app.post("/",(req,res)=>{
    let blogHead =req.body["title"]
    let blogBody = req.body["blogBody"]
    let blogImg= req.body["img"]
   
    res.render("index.ejs",{blogHead:blogHead,
    blogContant:blogBody,
    blogImg:blogImg,
    });
});
app.post("/blogCreation",(req,res)=>{
    let blogHead= req.body["title"];
    let blogImg= req.body["blogImg"];
    let blogBody= req.body["blogContant"];
    res.render("blog-creation.ejs",{
        blogHead:blogHead,
        blogBody:blogBody,
        blogImg:blogImg,
    });
});
app.post("/reset-content",(req,res)=>{
    delete req.body["locals.blogContant"];
    res.redirect("/");
})


app.listen(port , ()=>{
    console.log(`Listening on port ${port}`);
});
