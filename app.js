const express=require('express');
const db=require('./models/index');
const app=express();
const port=process.env.PORT;
var bodyParser=require("body-parser")
app.use(bodyParser.json());

app.get('/',async(req,res) =>{ 
    let value=req.query.id;
    const row= await db.Users.readdata(value);
    res.json(row)
});

app.post("/insert",async(req,res)=>
{
    console.log(req.body);
    const row= await db.Users.Insertdata(req.body);
    console.log(row);
    res.json(row);
})

app.delete("/delete",async(req,res)=>{
    const id=req.query.id;
    const status = await db.Users.Deletedata(id);
    console.log(status);
    res.json(status);
})

app.put("/put",async(req,res)=>{
    const value=req.query.id;
    const status = await db.Users.Updatepassword(value,req.body.email);
    console.log(status);
    res.json(status);
})

app.listen(port,()=>{
    console.log(`App is listening at http://localhost:${port}`);
}); 