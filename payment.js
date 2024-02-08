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







// Lottie tick animation configuration
const tickAnimationConfig = {
    container: document.getElementById('tickAnimation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://lottie.host/c42649db-a7fc-48fe-81e1-585134868cc4/LWpgNXdKTi.json',
};

// Initialize Lottie tick animation
const tickAnimation = lottie.loadAnimation(tickAnimationConfig);

function playTickAnimation() {
    tickAnimation.play();
}

function buyNow() {
    const nameValue = document.getElementById('name').value.trim();
    const addressValue = document.getElementById('address').value.trim();

    if (!nameValue || !addressValue) {
        alert('Please fill in both Name and Address before proceeding.');
        return; 
    }

    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var paymentMethod = document.getElementById('paymentMethod').value;

    // Display thank you message
    document.getElementById('thankYouName').textContent = name;
    document.getElementById('thankYouAddress').textContent = address;
    document.getElementById('thankYouPaymentMethod').textContent = paymentMethod;

    // Hide the form
    document.getElementById('paymentForm').style.display = 'none';

    // Play the tick animation
    playTickAnimation();

    // Show the thank you message
    document.getElementById('thankYouMessage').classList.remove('hidden');

    setTimeout(function () {
        window.location.href = 'products.html';
    }, 5000);
}

