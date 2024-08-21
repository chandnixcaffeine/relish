document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  var mainimg = document.querySelector("#page1 img");

  var tl = gsap.timeline();

  tl.from(mainimg, {
    scale: 0,
    duration: 2,
    ease: "power4.out",
  });

  tl.from("#text-box h1", {
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

  tl.from("#text-box h3", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#text-box h3",
      scroller: "body",
      scrub: 2,
    },
  });
  
});

window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");

  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
