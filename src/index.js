var express = require('express')
var app = express();
// const path=require("path");
// app.use(express.static());
// const staticPth=(path.join(__dirname,"/public"));
// console.log(path.join(__dirname,"/public"));
//app.use(express.static(staticPth));
//to set views engine
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("dixes");
});
app.get("/",(req,res)=>{
    res.send("hello from home page");
});
app.listen(80,()=>{ 
    console.log("listening on port 80");
});