//// Slider for advertisements on Home Page
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

//// Slider for products on Home Page
const initSlider = () => {
    const imageList = document.querySelector(" .Slider-Wrapper .Image-List");
    const slideButtons = document.querySelectorAll(" .Slider-Wrapper .product-slide-button");
    const ProductSliderScrollBar = document.querySelector(" .Product-Slider-Container .Product-Slider-ScrollBar");
    const ProductScrollBarThumb = ProductSliderScrollBar.querySelector(" .Product-Scrollbar-Thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    ProductScrollBarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = ProductScrollBarThumb.offsetLeft;

        //update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = ProductSliderScrollBar.getBoundingClientRect().width - ProductScrollBarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft

            ProductScrollBarThumb.style.left = `${boundedPosition}px` ;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove even listeners on mouse up 
        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button 
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "product-prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (ProductSliderScrollBar.clientWidth - ProductScrollBarThumb.offsetWidth);
        ProductScrollBarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
      handleSlideButtons();
      updateScrollThumbPosition();
    });
}

window.addEventListener("load", initSlider)



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

// Open Product Page with Selected Category and Set Filter
function openProductPage(category) {
  // Set the selected category in the filter bar
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.value = category.replace(/ /g, '-'); // replace spaces with hyphens

  // Redirect to products.html with the selected category as a parameter
  window.location.href = 'products.html?category=' + category;
}