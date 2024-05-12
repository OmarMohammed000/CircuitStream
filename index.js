import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let blogs = [];
let count = 0;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
function getBlogByCount(num) {
  if (!blogs || !blogs.length) {
    console.error("Blogs array is empty or undefined");
    return null; // Or handle the empty array case differently
  }
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].count == num) {
      return blogs[i]; // Return the matching object
    }
  }
  return null; // Return null if not found
}
app.get("/", (req, res) => {
  res.render("index.ejs", { blogs: blogs });
});

app.get("/augmented-reality", (req, res) => {
  res.render("augmentedReality.ejs");
});
app.get("/Quantum-computers", (req, res) => {
  res.render("q.ejs");
});
app.get("/blogCreation", (req, res) => {
  res.render("blog-creation.ejs");
});
  app.post("/", (req, res) => {
    
    const validationErrors = []; // Array to store validation errors
    const blogHead = req.body["title"];
    const blogImg = req.body["img"];
    const blogBody = req.body["blogBody"];
    
    
    // Validate blog title (required)
    if (!blogHead || blogHead.trim() === "") {
      validationErrors.push("Title is required.");
    }
    
// Basic validation for blog image URL (optional)
if (blogImg) {
  const validImageRegex = /\.(jpe?g|png|gif)$/i; // Case-insensitive image extension check
  if (!validImageRegex.test(blogImg)) {
    validationErrors.push(
      "Invalid image URL. Please provide a URL ending with a valid image extension (JPG, JPEG, PNG, GIF)."
    );
  }
} else {
  // Handle missing blog image URL 
  console.log("bad url")
  validationErrors.push("Blog image URL is required.");
}

// Handle validation errors
if (validationErrors.length > 0) {
  console.log("should not render");
  return res.render("blog-creation.ejs", { errors: validationErrors});
}

count++;
blogs.push({ count, blogHead, blogImg, blogBody }); // In-memory array (for development)

console.log("Blog created successfully!")
res.render("index.ejs", { blogs: blogs });
});
app.post("/blogCreation",(req,res)=>{
  let num = req.body["count"];
  
  const specificBlog=getBlogByCount(num);
  
   if (specificBlog) {
    const blogHead = specificBlog.blogHead;
    const blogImg = specificBlog.blogImg;
    const blogBody = specificBlog.blogBody;

    res.render("blog-creation.ejs", {
      blogHead,
      blogBody,
      blogImg,
    });
  } else {
    // Handle case where blog was not found (optional)
  }
});
app.post("/reset-content", (req, res) => {
  delete req.body["locals.blogContant"];
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
