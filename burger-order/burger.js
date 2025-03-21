console.log("Welcome to the Burger Order System!");

const nameOfTheBurger="combo meal"
const priceOfTheBurger=3
const quantity=2

var totalPrice =quantity * priceOfTheBurger
let isCombo = false
if(nameOfTheBurger==="combo meal"){
   
    totalPrice *= 1.5
    isCombo=true
    
}
console.log(`the name of the burger is: ${nameOfTheBurger} and the price is : ${priceOfTheBurger} `) 
console.log(`the name of the burger is ${nameOfTheBurger} and the total price for ${quantity} burgers is ${totalPrice} `)
console.log(`Order: ${quantity} ${isCombo ? "Combo" : "Regular"} ${nameOfTheBurger}. Total Price: $${totalPrice.toFixed(2)}`);

