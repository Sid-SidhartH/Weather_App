const express=require("express");
const app=express();
const port=3000;
app.use(express.static());
app.get("/",(req,res)=>{
    res.write("<h1> i am a heading tag</h1>");
    res.send();
});
app.get("/temp",(req,res)=>{
    res.send([
        {
        id:1,
        name:"sid",
    },
    {
        id:2,
        name:"bini",
    },
    {
        id:3,
        name:"paisa",
    }

   ])
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});