import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const productDiv = document.querySelector('.product');
  const productPrice = document.querySelectorAll('p')[1].innerHTML;
  const span = document.createElement('span');
  span.className = "data-price";
  span.innerText = productPrice;
  productDiv.setAttribute('data-price', productPrice);
  productDiv.appendChild(span);
});
