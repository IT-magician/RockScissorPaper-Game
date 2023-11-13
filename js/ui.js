// https://www.w3schools.com/howto/howto_js_sidenav.asp


document.querySelector(".navOpenerBtn").addEventListener("click", e => {
  const element = e.target
  document.querySelector(".sidenav").classList.toggle("opened")
});