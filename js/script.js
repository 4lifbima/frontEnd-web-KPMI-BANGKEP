// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Smooth scrolling for navbar links
document.addEventListener("DOMContentLoaded", function() {
  // Select all anchor links in the navbar
  const navbarLinks = document.querySelectorAll('.navbar-nav a');

  // Loop through each link
  for (let link of navbarLinks) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor click behavior

      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);

      // Scroll smoothly to the target section
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust the offset for the fixed navbar
          behavior: 'smooth'
        });

        // Close the navbar if it's active (for mobile view)
        if (navbarNav.classList.contains('active')) {
          navbarNav.classList.remove('active');
        }
      }
    });
  }
});
