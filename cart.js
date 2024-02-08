function filterItems() {
    const categoryFilter = document.getElementById('categoryFilter');
    const selectedCategory = categoryFilter.value;
    
    const items = document.querySelectorAll('.flex-item');
  
    items.forEach(item => {
        const category = item.dataset.category.toLowerCase();
        
        if (selectedCategory === 'all' || category === selectedCategory) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
  }
  
  //// cart pop up
  document.addEventListener('DOMContentLoaded', function () {
      const cartIcon = document.getElementById('cart-icon');
      const cartPopup = document.getElementById('cart-popup');
  
      cartIcon.addEventListener('click', function () {
          // Toggle the visibility of the cart popup by adjusting the right property
          cartPopup.style.right = cartPopup.style.right === '0px' ? '-300px' : '0px';
      });
  });


//// Close cart button

function closeCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.right = '-300px'; // Close the cart popup by moving it off-screen
}

// Initialize the cart popup when the page loads
document.addEventListener('DOMContentLoaded', function () {
    updateCartPopup();

    // Add an event listener to the close button
    const closeBtn = document.getElementById('close-cart-popup-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCartPopup);
    }
});



// cart.js

let cart = [];

function addToCart(productId, productName, productPrice) {
    const item = {
        id: productId,
        name: productName,
        price: productPrice,
    };

    cart.push(item);
    updateCartPopup();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartPopup();
}

function updateCartPopup() {
    const cartPopup = document.getElementById('cart-popup');

    // Clear previous content
    cartPopup.innerHTML = `
        <button id="close-cart-popup-btn" onclick="closeCartPopup()">&times;</button>
        <h2>Your Cart</h2>
        <hr />
    `;

    // Display "Your cart is empty" message above the line
    if (cart.length === 0) {
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cartPopup.appendChild(emptyCartMessage);
    } else {
        // Display cart items above the line with rubbish bin icons
        cart.forEach((item, index) => {
            const itemElement = document.createElement('p');
            itemElement.innerHTML = `
                ${item.name} - $${item.price}
                <i class="fas fa-trash-alt remove-icon" onclick="removeCartItem(${index})"></i>
            `;
            cartPopup.appendChild(itemElement);
        });
    }

    // Add a line after cart items or the message
    const lineElement = document.createElement('hr');
    cartPopup.appendChild(lineElement);

    // Display total price and checkout button below the line
    const totalPriceElement = document.createElement('div');
    totalPriceElement.className = 'total-price';
    totalPriceElement.textContent = `Total: $${calculateTotalPrice()}`;
    cartPopup.appendChild(totalPriceElement);

    const checkoutButton = document.createElement('button');
    checkoutButton.className = 'checkout-btn';
    checkoutButton.textContent = 'Checkout';
    cartPopup.appendChild(checkoutButton);
}

function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}

function closeCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.right = '-300px';
}

// Add more functions as needed for your application
