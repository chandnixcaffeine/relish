// document.addEventListener("DOMContentLoaded", () => {
//   const menuIcon = document.getElementById("menu-icon");
//   const mobileMenu = document.getElementById("mobile-menu");

//   // Disable scrolling during the loader
//   document.body.classList.add('loader-active');

//   menuIcon.addEventListener("click", () => {
//     mobileMenu.classList.toggle("active");
//   });
const menuIcon = document.getElementById('menu-icon');
const menuOverlay = document.getElementById('menu-overlay');
const body = document.body;
const menuLinks = document.querySelectorAll('#menu-overlay a'); // Select all links inside the menu overlay

// Toggle menu visibility when clicking the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the menu overlay
    menuOverlay.classList.toggle('active');
    
    // Toggle the 'active' class on the menu icon to change its color
    menuIcon.classList.toggle('active');
    
    // Prevent scrolling when the menu is open
    body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : 'auto';
});

// Close the menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu and reset the menu icon
        menuOverlay.classList.remove('active');
        menuIcon.classList.remove('active');
        
        // Allow scrolling again when the menu is closed
        body.style.overflow = 'auto';
    });
});


  var tl = gsap.timeline();

  gsap.set("nav", {
    opacity: 0,
    visibility: "hidden"
  });
  
  // Loader Animation
  tl.from("#loader h2", {
    x: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
  })
    .to("#loader h2", {
      opacity: 0,
      x: -40,
      duration: 1.2,
      stagger: 0.1,
    })
    .to("#loader", {
      opacity: 0,
      duration: 0.5,
    })

    .to("#loader", {
      display: "none",
      onComplete: function() {
        gsap.to("nav", {
          opacity: 1,
          visibility: "visible",
        });
      }
    })
    tl.to("#text p",{
      opacity: 1
    });

  
  // Main Page Image Animation
  var mainimg = document.querySelector("#page1 img");
  tl.from(mainimg, {
    scale: 0,
    duration: 2,
    ease: "power4.out",
  });

  // Scroll Trigger Animations
  gsap.from("#text-box h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#text-box h1",
      scroller: "body",
      scrub: 2,
    },
  });

  gsap.from("#text-box h3", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#text-box h3",
      scroller: "body",
      scrub: 2,
    },
  });

