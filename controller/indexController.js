const { Product } = require("../models/product");
const { validationResult } = require("express-validator");

class Controller {
  async list(req, res) {
    const products = await Product.find();
    res.status(200).json(products);
  }

  async create(req, res) {
    try {
      const err = validationResult(req);
      if (err.isEmpty()) {
        const productToSave = new Product(req.body);
        await productToSave.save();
        res.status(201).json({ msg: "Product saved." });
      } else {
        res.status(501).json(err);
      }
    } catch (error) {
      res.status(501).json(error);
    }
  }
}

module.exports = new Controller();
