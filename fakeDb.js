const { NotFoundError } = require("./expressError");

const items = [{ name: "popsicle", price: 1.45 },
{ name: "cheerios", price: 3.40 }];

class Items {
  static findAll(){
    return items;
  }

  static find(name){
    const foundItem = items.find(item => item.name === name);
    if (foundItem) {
      return foundItem
    } else {
      throw new NotFoundError(`${name} not found.`);
    }
  }

  static addItem(name, price){
    const item = { name, price };

    items.push(item);
    return item;
  }

  static editItem(name ,data){
    const item = Items.find(name);
    if(item){
      item.name = data.name || item.name
      item.price = data.price || item.price
      return item
    }
    return null;
  }

  static deleteItem (name){
    const foundItemIndex = items.findIndex(item => item.name === name);
    if(foundItemIndex === -1){
      throw new NotFoundError(`${name} not found.`);
    }else{
      items.splice(foundItemIndex, 1)
      return true;
    }

  }

  static deleteAll(){
    while(items.length > 0){
      items.pop()
    }
  }



}



module.exports = { items, Items };