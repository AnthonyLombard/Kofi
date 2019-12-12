const express = require('express');
const app = express();
const port = 3121;
const mongo = require("mongodb");
const uuidv1 = require('uuid/v1'); 
const cors = require('cors')

var url = "mongodb://localhost:27017/";

app.use(cors())
app.use(express.json()) 




app.get('/getproducts', function (req, res) {
    var resultSet = [];
mongo.connect(url,function(err,db){
    if (err) throw err;
    console.log("Getting products");
    var dbo = db.db("Kofi")
    var defaultProduct = {id:uuidv1(),name:"Caffe Latte",image:"assets/latte.jpg",price:"30",category:"Coffee"};
    dbo.collection("products").find({}).toArray(function(err, result) {
        if (err) throw err; 
        res.send(result)
        db.close();
      });
    })
})

app.post('/addtocart', function (req, res) {
console.log('====================================');
console.log(req.body); 
console.log('===================================='); 
res.send("200")

mongo.connect(url,function(err,db){
    if (err) throw err;
    console.log("Adding to cart");
    var dbo = db.db("Kofi")
    dbo.collection("usercart").insertOne(req.body); 
    })

})



app.listen(port, () => console.log(`Kofi backend alive on  ${port}!`))
