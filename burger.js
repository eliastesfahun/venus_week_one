// Burger Order System

// Step 1: Log statement to check if script is running
console.log("Welcome to the Burger Order System!");

// Step 2: Declare variables for the burger name and price
const burgerName = "Cheeseburger";
const burgerPrice = 8.99;

// Step 3: Log order details
console.log(`New burger order: ${burgerName}. Price: $${burgerPrice}`);

// Step 4: Declare variables for quantity and combo meal option
const quantity = 3;
const isCombo = false;

// Step 5: Calculate total price
let totalPrice = burgerPrice * quantity;
if (isCombo) {
    totalPrice *= 1.5; // Increase price by 50% for combo meal
}

// Step 6: Log final order details
console.log(`Order: ${quantity} ${isCombo ? "Combo" : "Regular"} ${burgerName}. Total Price: $${totalPrice.toFixed(2)}`);