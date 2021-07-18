//Author: Tanuj Sobti (B00864990)
const passport = require('passport');
const Dish = require('../model/dish.model')

module.exports.addDish = async (req, res) => { 
  try{ 
      const DishObj = new Dish({
            UserID      : req.body.UserID,
            dishID      : req.body.dishID,
            dishname    : req.body.dishname,
            dishRating  : req.body.dishRating,
            dishcost    : req.body.dishcost,
            mealtype    : req.body.mealtype,
            dishstatus  : req.body.dishstatus,
            delivery    : req.body.delivery,
            Image       : req.body.Image,
      })

      const dishDetails = await DishObj.save();
      res.status(200).json(dishDetails);

  }catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
};

module.exports.getUserDish = async (req, res) => { 

    const userID = req.query.UserID;
    try{ 
          let allUserDish;
          if(userID){
            allUserDish = await Dish.find({ "UserID" : userID });
          } else {
            res.status(404).json("No dish found for the userID")
          }
          res.status(200).json(allUserDish);
  
      }catch (err) {
          return res.status(500).json({
            message: "Internal server error",
            success: false,
          });
        }
  };


module.exports.getUserDishById = async (req, res) => {

  const foodItem = await Dish.findById(req.params.id);
    try{ 
          if(foodItem)
          {
            res.status(200).json(foodItem);
          } else {
            res.status(404).json("No dish found for the ID")
          }
      }catch (err) {
          return res.status(500).json({
            message: "Internal server error",
            success: false,
          });
        }
  };

module.exports.removeDish = async (req, res) => {
    try{
        const deletedDish = await Dish.findById(req.params.id);
        if(deletedDish.UserID === req.body.UserID)
        {
          await deletedDish.delete();
          res.status(200).json("Dish has been removed from Kitchen Successfully!! ");
        }else {
          res.status(401).json("You can't delete the dish for this id")
      }
    }catch (err) {
        console.log(err);
        return res.status(500).json({
          message: "Internal server error",
          success: false,
        });
      }
    };

module.exports.updateDish = async (req, res) => {
        
        const foodItem = await Dish.findById(req.params.id);
        if (foodItem.UserID === req.body.UserID) 
        {
          try {
            const updatedDish = await Dish.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            )
        res.status(200).json(updatedDish);
    }catch (err) {
        console.log(err);
        return res.status(500).json({
          message: "Internal server error",
          success: false,
        });
      }
    } else 
    {
        res.status(401).json("You can't update the dish for this id")
    }
  };