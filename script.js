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

// Linking the Product Categories on the Home Page to the Respective Pages on the Product Page
function filterItems() {
  // Get the selected category from the dropdown
  var categoryFilter = document.getElementById("Category-Name");
  var selectedCategory = categoryFilter.value;

  // Check if a category is specified
  if (selectedCategory === "all") {
      console.log('all categories selected');
      // Handle the case where "All" is selected (show all items)
  } if (selectedCategory === "computer and peripherals") {
      console.log('computer and peripherals:', selectedCategory);
      // Use the selected category to filter or display relevant items
      // For demonstration purposes, let's just log it to the console.
  }
}z