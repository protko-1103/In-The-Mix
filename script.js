document.addEventListener("DOMContentLoaded", () => {
  const registerBtn = document.getElementById("register-btn");
  if (registerBtn) {
    registerBtn.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "register.html";
    });
  }

  const eventsBtn = document.getElementById("events-btn");
  if (eventsBtn) {
    eventsBtn.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "events.html";
    });
  }

  const homeBtn = document.getElementById("home-btn");
  if (homeBtn) {
    homeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "index.html";
    });
  }

  const learnMoreBtn = document.getElementById("learnmore-btn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "sampleeventinfo.html";
    });
  }

  const uploadEventBtn = document.getElementById("uploadevent-btn");
  if (uploadEventBtn) {
    uploadEventBtn.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "uploadevent.html";
    });
  }
});