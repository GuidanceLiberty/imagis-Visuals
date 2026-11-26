
/* =====================================
   LOAD NAVBAR DYNAMICALLY
===================================== */

fetch("navbar.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load navbar.html");
    }
    return response.text();
  })
  .then(data => {
    const navbar = document.getElementById("navbar");

    if (navbar) {
      navbar.innerHTML = data;

      const menu = document.querySelector(".menu");
      const toggle = document.getElementById("toggle");

      if (toggle && menu) {
        toggle.addEventListener("click", function () {
          menu.classList.toggle("active");
        });
      }
    }
  })
  .catch(error => {
    console.error("Navbar loading error:", error);
  });


/* =====================================
   SPLIDE INITIALIZATION
===================================== */

window.addEventListener("load", function () {

  // First check whether this page has a slider
  const slider = document.querySelector(".MySplide");

  if (!slider) {
    return;
  }

  // Check whether Splide is loaded
  if (typeof Splide === "undefined") {
    console.error("Splide library is missing on this page.");
    return;
  }

  const autoScroll = window.splide?.Extensions?.AutoScroll;

  const splide = new Splide(".MySplide", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 2.5,
    gap: "2rem",
    pagination: false,
    ...(autoScroll && {
      autoScroll: {
        speed: 1,
      },
    }),
  });

  if (autoScroll) {
    splide.mount({ AutoScroll: autoScroll });
  } else {
    splide.mount();
  }

});
