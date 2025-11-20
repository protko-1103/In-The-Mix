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

// MODAL script
  const steps = document.querySelectorAll('.modal-step');

  // Handle Next buttons
  document.querySelectorAll('.next').forEach(btn => {
    btn.addEventListener('click', () => {
      let nextStep = btn.dataset.next;
      
      steps.forEach(step => step.classList.add('d-none'));
      document.getElementById(nextStep).classList.remove('d-none');
    });
  });

  // Handle Back buttons
  document.querySelectorAll('.back').forEach(btn => {
    btn.addEventListener('click', () => {
      let backStep = btn.dataset.back;

      steps.forEach(step => step.classList.add('d-none'));
      document.getElementById(backStep).classList.remove('d-none');
    });
  });

  // Handle Email Form Submit
  document.getElementById('emailSignupForm').addEventListener('submit', function(e){
    e.preventDefault();

    // Validate, send to API, etc. here. We prob don't have time for this.

    window.location.href = "#"; // <-- Your logged-in page
  });
