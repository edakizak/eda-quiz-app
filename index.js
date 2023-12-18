const bookmarkBagde = document.querySelector("[data-js='bookmark-badge']");
const badgeImg = document.querySelector("[data-js='img']");

console.dir(bookmarkBagde);
bookmarkBagde.addEventListener("click", function () {
  console.log("Clicked");
  bookmarkBagde.classList.toggle("toggle");
});
