// array vs object 
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 34,
    karim: 46,
    jamal: 75,
    robi: 36,
    tarek: 65

}
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values)

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValues = shoppingCart[propertyName];
    console.log(propertyName, propertyValues);
}

// for in loop
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}