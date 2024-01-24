// Slider For Advertisements On Home Page
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });


})

// Filter Function On Product Page
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



// Linking the Product Categories on the Home Page to the Respective Pages on the Product Page
function openProductPage(category) {
  // Construct the URL with the category and a fragment identifier
  const url = `products.html?category=${category}#${category}_content`;
  window.location.href = url;
}

// Get the category and layout from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const layout = urlParams.get('layout');

// Load content based on category and layout
if (category && layout) {
  // Use category and layout to determine which content to load
  switch (layout) {
      case 'layout1':
          // Load content for layout 1
          document.getElementById(`${category}_content`).innerHTML = `<p>Content for ${category} in Layout 1 Goes Here</p>`;
          break;
      case 'layout2':
          // Load content for layout 2
          document.getElementById('productContent').innerHTML = `<p>Content for ${category} in Layout 2 Goes Here</p>`;
          break;
      // Add more cases for additional layouts
      default:
          // Default layout
          document.getElementById('productContent').innerHTML = `<p>Default Content for ${category} Goes Here</p>`;
  }
}

