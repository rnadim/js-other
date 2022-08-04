var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative System
// when you know the specific property name, dot notation to get the property value
var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';

var propertyValues = shoppingCart[propertyName];
console.log(propertyName, propertyValues);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCart);

// set proprty values
shoppingCart.mouse = 15;
shoppingCart['mouse'] = 60;

console.log(shoppingCart);