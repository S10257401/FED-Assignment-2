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
  
  const items = document.querySelectorAll('.Product-Item');

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



// Linking the Product Categories on the Home Page to the Product Page
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Read the 'filter' parameter from the URL
var filterValue = getParameterByName('filter');

// Apply filter based on the value
if (filterValue) {
  // Your code to apply the filter based on the 'filterValue'
  console.log('Applying filter:', filterValue);
  // For example, you can highlight the selected filter option
  document.getElementById(filterValue).classList.add('selected');
}

