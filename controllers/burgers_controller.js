const express = require('express');
const burger = require('../models/burger');
const router = express.Router();
//create the router app

router.get("/", function(req, res){
    burger.selectAll(function (data){
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject)
    })
});

router.post('/api.burgers', (req, res) => {
    burger.insertOne([
        'burger_name'
    ],
    [req.body.burger_name],
    (result) => {
        res.json({result})
    })
});

router.put("/api/burgers/devoured/:id", function (req,res) {
    const condition = `id = ${req.params.id}`;
    console.log('conditon', condition);

    burger.updateOne(
        { devoured: true
        }, conditon, function(data){
            res.redirect("/");
        });
});

module.exports = router