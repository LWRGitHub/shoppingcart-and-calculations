// ========================================================
// Calculations
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w*h;
}

const perimeter = (w, h) => {
  return (w+h)*2;
}

const circleArea = r => {
  return Math.PI*(r*r)
}


// ========================================================
// Shopping Cart
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart
}

const addItemToCart = (item) => {
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  shoppingCart.pop(item);
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
