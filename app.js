const express = require("express");
const app = express();
const util = require(__dirname + "/util");
const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("resources"));

const items=[];
const workitems=[];


app.listen(PORT, ()=>{
    console.log("Server started on port ["+ PORT +"]");
});

app.get("/",(req, res)=>{

    console.log("Date ["+ util.getDateOfMonth()+"] Month ["+ util.getMonth()+"] Year ["+ util.getYear()+"] Day of Week [" + util.getDayOfWeek()+"]");
    res.render("index", {
    listTitle:"General",
    items:items});
    
});

app.post("/", (req, res)=>{

    console.log(req.body);

    if (req.body.additem==="General" ){
        
        items.push(req.body.newitem);
        res.redirect("/");
    }   
    else if (req.body.additem==="Worklist"){
        
        workitems.push(req.body.newitem);
        res.redirect("/work");
    }
    
});

app.get("/work", (req, res)=>{

    console.log("Date ["+ util.getDateOfMonth()+"] Month ["+ util.getMonth()+"] Year ["+ util.getYear()+"] Day of Week [" + util.getDayOfWeek()+"]");
    res.render("index", {
        listTitle:"Worklist",
        items:workitems});
});

