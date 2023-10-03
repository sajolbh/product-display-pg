const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ms_products'
});


connection.connect(err => {
    if(err){
        return err;
    }
})

app.get('/api/product/', (req,res)=>{
    const product_id = req.params.id;
    const query = `select * from sku a  join sku_specs b on a.id = b.prod_id`;
    connection.query(query, (err, result)=>{
        if(err){
            return res.send(err);
        } else{
            return res.json({data:result})
        }
    });
});
 

const port = 5000;

app.listen(port, ()=>{
    console.log("running");
});