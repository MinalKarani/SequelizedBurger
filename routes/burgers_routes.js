
var db = require("../models");

module.exports = function(app) {
app.get("/",function(req,res){
    var hbsobj;
    db.Burger.findAll({include: [ db.Customer ]}).then(function(dbburger) {
        hbsobj={
            burgers : dbburger
                    }
        // We have access to the Burger as an argument inside of the callback function
        res.render("index",hbsobj);
});
    
});


app.post("/api/burgers", function(req, res) {
    
        db.Burger.create({
          burger_name: req.body.name,
          devoured:false,
          
        }).then( function(dbBurger){
    
            res.json(dbBurger);
    
        });
    
  });

app.put("/api/burgers/:id",function(req,res)
{
  db.Customer.findOrCreate({
    where: {
      name: req.body.customerName
    }
  }).then(function (results) {

    db.Burger.update({
      devoured: true,
      CustomerId: results[0].id
    }, {
        where: {
          id: req.params.id
        }
      })
      .then(function (result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
  });
});
  
};