const express = require('express');
const app = express();
const port = 8000;
const faker = require('@faker-js/faker');
const Order = require('./order');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api,test", (req, res) => {
    res.json({message: "you did it!"});
})

app.get("/api/order", (req, res) => {
    

    res.json(new Order());
})

app.get("/api/order/:amount", (req, res) => {
    const orders = [];
    for(let i = 0; i < req.params.amount; i++){
        orders.push(new Order());
    }

    res.json(orders);
})


app.listen(port, () => console.log(`running on port ${port}. let's go.`));