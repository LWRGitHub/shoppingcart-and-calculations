const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect


it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// 1. Tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Code writen in the utils.js file to make the test pass.
// ========================================================

// ========================================================
// Calculations
// ========================================================

it("should return the area of a rectangle", function() {
  const area = utils.area(2,4)
  expect(area).to.be.a("number")
  expect(area).to.equal(8)
})

it("should return the perimeter of a rectangle", function() {
  const perimeter = utils.perimeter(1,1)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal(4)
})

it("Should return the area of a circle with radius", function() {
  const circleArea = utils.circleArea(2)
  expect(circleArea).to.be.a("number")
  expect(circleArea).to.equal(12.566370614359172)
})


// ========================================================
// Shopping Cart
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function(){
  const getShoppingCart = utils.getShoppingCart()
  expect(getShoppingCart).to.be.an('array')
})

it("Should add a new item to the shopping cart", function(){
  const preCount = utils.getNumItemsInCart()
  const addItemToCart = utils.addItemToCart({name:"Some Name",price:2,quantity:1})
  expect(utils.getNumItemsInCart()).is.greaterThan(preCount)
})

it("Should return the number of items in the cart", function(){
  const getNumItemsInCart = utils.getNumItemsInCart()
  expect(getNumItemsInCart).to.be.a("number")
})

it("Should remove items from cart", function(){
  const addItemToCart = utils.addItemToCart("Some Item")
  const preCount = utils.getNumItemsInCart()
  const removeItemFromCart = utils.removeItemFromCart("Some Item")
  expect(utils.getNumItemsInCart()).is.lessThan(preCount)
})

