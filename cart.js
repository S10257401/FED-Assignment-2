document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const cartPopup = document.getElementById('cart-popup');

    cartIcon.addEventListener('click', function () {
        // Toggle the visibility of the cart popup by adjusting the right property
        cartPopup.style.right = cartPopup.style.right === '0px' ? '-300px' : '0px';
    });
});

// Close cart button
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

let cart = [];

function addToCart(productId, productName, productPrice) {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        const newItem = {
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1,
        };
        cart.push(newItem);
    }

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
        // Display cart items above the line with quantity and rubbish bin icons
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div>
                    <p>${item.name}</p>
                    <p>Price: $${item.price}</p>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <div>
                    <i class="fas fa-trash-alt remove-icon" onclick="removeCartItem(${index})"></i>
                </div>
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
    checkoutButton.addEventListener('click', function () {
        showPaymentPage(); // Redirect to payment.html
    });
    cartPopup.appendChild(checkoutButton);
}

function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

function showPaymentPopup() {
    const paymentPopup = document.getElementById('payment-popup');
    paymentPopup.style.right = '0'; // Set the right property to '0' to show the payment popup

    // Display subtotal in the payment popup
    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.textContent = `Subtotal: $${calculateTotalPrice()}`;
}

function buyNow() {
    cart = [];
    updateCartPopup();
    showPaymentPage();

    window.location.href = 'products.html';

}

function closePaymentPopup() {
    const paymentPopup = document.getElementById('payment-popup');
    paymentPopup.style.right = '-300px'; // Close the payment popup by moving it off-screen
}

document.addEventListener('DOMContentLoaded', function () {
    updateCartPopup();

    const closeBtn = document.getElementById('close-cart-popup-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCartPopup);
    }
});

function showPaymentPage() {
    // Get the total price
    const totalPrice = calculateTotalPrice();

    // Create a data object with cart information
    const cartData = {
        total: totalPrice,
        items: cart
    };

    // Convert the data object to a JSON string and encode it for the URL
    const cartDataString = encodeURIComponent(JSON.stringify(cartData));

    // Redirect to the payment page with the cart data as a query parameter
    window.location.href = `payment.html?cartData=${cartDataString}`;
}
