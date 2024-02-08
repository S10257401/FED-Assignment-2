const urlParams = new URLSearchParams(window.location.search);
const cartDataString = urlParams.get('cartData');

if (cartDataString) {
    const cartData = JSON.parse(decodeURIComponent(cartDataString));

    document.getElementById('totalPrice').textContent = cartData.total || '0.00';

    console.log('Cart Items:', cartData.items);   
} 
else {
    console.error('Cart data is missing.');
}

function buyNow() {
    window.location.href = 'products.html';

}