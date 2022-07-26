// ======= Nav Section ======= //
let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    navLinks.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.classList.add("active");
  });
});
// Nav End

// ======= Skills Section ======= //
let skills = document.querySelector(".skills");
let progressBar = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
  if (this.scrollY >= skills.offsetTop - 500) {
    progressBar.forEach((ele) => {
      ele.style.width = ele.dataset.width;
    });
  }
});
// Skills End
