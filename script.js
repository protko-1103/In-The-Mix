const registerLink = document.getElementById('registerLink');

registerLink.addEventListener('click', (event) => {
  event.preventDefault(); // stops the link from refreshing the page
  console.log("Register clicked!"); // test that click workss
});