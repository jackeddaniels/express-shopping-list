const express = require("express");
const db = require("./fakeDb");
const { NotFoundError } = require("./expressError");
const router = new express.Router();

router.get('/', function (req, res) {
  
  return res.json({ items: db.Items.findAll() });

});


router.post('/', function (req, res) {
  const name = req.body.name;
  const price = req.body.price;
  const item = db.Items.addItem(name, price);

  return res.json({ added: item });

});


router.get('/:name', function (req, res) {
  const name = req.params.name;
  const foundItem = db.Items.find(name);

  return res.json(foundItem);

});

router.patch('/:name', function (req, res) {
  const name = req.params.name;
  const updatedItem = db.Items.editItem(name, req.body);

  return res.json({ updated: updatedItem });

});

router.delete('/:name', function (req, res) {
  const name = req.params.name;
  db.Items.deleteItem(name);

  return res.json({ message: "Deleted" });

});


module.exports = router;