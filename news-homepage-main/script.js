document.addEventListener('DOMContentLoaded', () => {
    const topbar = document.querySelector(".top-bar");

document.querySelector(".hamburger").addEventListener("click", () => {
    //console.log('hello')
  topbar.classList.toggle("show-topbar");
});

// Create click event for close icon and toggle topbar show
document.querySelector(".close-icon-wrapper").addEventListener("click", () => {
    //console.log('hello')
  topbar.classList.toggle("show-topbar");
});
})


