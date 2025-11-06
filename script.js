document.addEventListener('DOMContentLoaded', () => {
  const registerLink = document.getElementById('register-btn');

  registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // stops the link from refreshing the page
    console.log("Register clicked!"); // test
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const registerLink = document.getElementById('events-btn');

  registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // stops the link from refreshing the page
    console.log("Events clicked!"); // test
  });
});