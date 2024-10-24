// Initialize the cart total and cart items
let total = 0;
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Add event listener to each 'Add to Cart' button
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const productName = this.getAttribute("data-name");
    const productPrice = parseFloat(this.getAttribute("data-price"));

    // Create a new div element for the cart item
    const cartItem = document.createElement("div");
    cartItem.innerText = `${productName} - $${productPrice}`;
    cartItems.appendChild(cartItem);

    // Update the total price
    total += productPrice;
    cartTotal.innerText = total.toFixed(2);
  });
});

// Handle checkout button click
document.getElementById("checkout").addEventListener("click", function () {
  if (total === 0) {
    alert("Your cart is empty. Please add some products.");
  } else {
    alert(`Thank you for your purchase! Your total is $${total.toFixed(2)}`);
    cartItems.innerHTML = ""; // Clear the cart
    total = 0;
    cartTotal.innerText = "0.00";
  }
});
