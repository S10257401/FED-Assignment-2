//// Slider For Advertisements On Home Page
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

//// Dropdown Filter For Product Page 
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

//// Linking of Product Category on Home Page to Product Page 
// Open Product Page with Selected Category and Set Filter
function openProductPage(category) {
  // Set the selected category in the filter bar
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.value = category.replace(/ /g, '-'); // replace spaces with hyphens

  // Redirect to products.html
  window.location.href = 'products.html';
}

//// Spin The Wheel on Games Page





//// Linking the Product Categories on home page to product page

// Function to get URL parameters by name
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Function to pre-select the filter based on URL parameter
function preSelectCategoryFilter() {
  const categoryFilter = document.getElementById('categoryFilter');
  const selectedCategory = getParameterByName('category');

  if (selectedCategory) {
      categoryFilter.value = selectedCategory;
      filterItems(); // Trigger filtering based on the pre-selected category
  }
}

// Run the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Call the function to pre-select the filter
  preSelectCategoryFilter();
});

// Dropdown Filter For Product Page 
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

//Linking of Product Category on Home Page to Product Page 
// Open Product Page with Selected Category and Set Filter
function openProductPage(category) {
  // Set the selected category in the filter bar
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.value = category.replace(/ /g, '-'); // replace spaces with hyphens

  // Redirect to products.html with the selected category as a parameter
  window.location.href = 'products.html?category=' + category;
}