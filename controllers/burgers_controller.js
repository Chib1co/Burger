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

router.post('/api/burgers', (req, res) => {
    burger.insertOne(["burger_name", "devoured"],
    [req.body.burger_name, false], 
    function (result) {
        // console.log(result);
        res.json(result)
      });
    });

router.put("/api/burgers/:id", function (req,res) {
    const condition = `id = ${req.params.id}`;
    const boolean = {devoured: true}
    // console.log('condition', condition);

    burger.updateOne(boolean, condition, function (result) {
        if (result.changedRows === 0) {
          //if no rows were changed, the ID must not exist so 404
          return res.status(404).end();
        }
        
        res.status(202).end();
      });
    });

module.exports = router