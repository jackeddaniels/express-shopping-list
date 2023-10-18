const express = require("express");
const { items } = require("./fakeDb");
const { NotFoundError } = require("./expressError");
const router = new express.Router();

router.get('/', function (req, res) {

  return res.json({items})
})


router.post('/', function (req, res) {
  const name = req.body.name;
  const price = req.body.price;
  const item = {name, price};

  items.push(item);
  return res.json({added: item})
})


router.get('/:name', function(req, res) {
  const name = req.params.name;
  const foundItem = items.find(item => item.name === name)
  console.log('found item=', foundItem)

  if (foundItem) {
    return res.json(foundItem)
  } else {
    throw new NotFoundError(`${name} not found.`);
  }
})


module.exports = router;