// ======= Active Nav Link When Clicked ======= //
let navLinks = document.querySelectorAll(".nav-link");
let navToggler = document.querySelector(".navbar-toggler")
let navCollapse = document.querySelector(".navbar-collapse")

navLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    navLinks.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.classList.add("active");
    //close mobile navbar toggler when click on link
    if (navCollapse.classList.contains("show")===true) {
      navToggler.click()
    }
  });
});

// ======= Animatation Styles ======= //
let animateSections = document.querySelectorAll('.animate .container');
let skills = document.querySelector(".skills .container");

let progressBar = document.querySelectorAll(".progress-bar");

["load", "scroll"].forEach((event) =>
  window.addEventListener(event, () => {
    // animate sections
    animateSections.forEach(ele => {
      if (this.scrollY >= ele.offsetTop - 900) {
        ele.style.animation = "fade 1s ease-out forwards";
      }
    })
    // animate progress bar
    if (this.scrollY >= skills.offsetTop - 650) {
      progressBar.forEach((ele) => {
        ele.style.width = ele.dataset.width;
      });
    }
  })
);

// ======= Scroll to Hashed Section when load ======= //
window.addEventListener("load", () => {
  if (window.location.hash) {
    let section = document.querySelector(`${window.location.hash}`);
    let scrollSection = section.offsetTop - 59.61;
    scrollTo(0, scrollSection);
  }
});

// ======= Copyright Year ======= //
let copyright = document.querySelectorAll(".copyright span");
let year = new Date().getFullYear();
copyright.forEach((ele) => (ele.innerHTML = year));
