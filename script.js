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

  // Redirect to products.html
  window.location.href = 'products.html';
}
