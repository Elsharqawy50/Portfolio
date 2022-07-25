



// ======= Skills Section ======= //
let skills = document.querySelector(".skills")
let progressBar = document.querySelectorAll(".progress-bar")

window.addEventListener("scroll", () => {
  if (this.scrollY >= skills.offsetTop-500 ) {
    progressBar.forEach(ele => {
      ele.style.width = ele.dataset.width
    });
  }
})
// Skills End