document.addEventListener('DOMContentLoaded', () => { //ensures the register button is clickable
  const registerLink = document.getElementById('register-btn');

  registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // stops the link from refreshing the page
    console.log("Register clicked!"); // test
  });
});

document.addEventListener('DOMContentLoaded', () => { //same purpose, but for the events tab
  const registerLink = document.getElementById('events-btn');

  registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // stops the link from refreshing the page
    console.log("Events clicked!"); // test
  });
});


document.addEventListener('DOMContentLoaded', () => { //same purpose, but for the events tab
  const registerLink = document.getElementById('home-btn');

  registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // stops the link from refreshing the page
    console.log("Home clicked!"); // test
  });
});

document.addEventListener('DOMContentLoaded', () => { //same purpose, but for the events tab
  const registerLink = document.getElementById('learnmore-btn');

  registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // stops the link from refreshing the page
    console.log("Learn More clicked!"); // test
  });
});

document.addEventListener('DOMContentLoaded', () => { //same purpose, but for the events tab
  const registerLink = document.getElementById('uploadevent-btn');

  registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // stops the link from refreshing the page
    console.log("Upload Event clicked!"); // test
  });
});