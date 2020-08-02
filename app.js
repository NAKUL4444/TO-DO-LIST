const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();

var arr=["hello","there"];

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){


let day=date();
res.render("list",{d: day, add: arr});


});

app.post("/",function(req,res){
var cach=req.body.name;
arr.push(cach);
res.redirect("/");
});
app.listen(3000,function(){
console.log("server start");
});