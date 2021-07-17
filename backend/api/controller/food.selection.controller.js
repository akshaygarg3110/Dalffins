const foodItems = require("../model/food.items");

module.exports.getKitchenByOwnerId = (req, res, next) => {
  const id = req.params.id;

  foodItems.findById(id, function (err, docs) {
    if (err) {
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    } else {
      return res.status(200).json({
        success: true,
        data: docs,
      });
    }
  });
};
