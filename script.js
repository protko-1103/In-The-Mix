document.addEventListener("DOMContentLoaded", () => {
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



  const uploadEventBtn = document.getElementById("uploadevent-btn");
  if (uploadEventBtn) {
    uploadEventBtn.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "uploadevent.html";
    });
  }



// MODAL script
  const modal = document.getElementById("signupModal"); 
  let steps = [];

  if (modal) {
    steps = modal.querySelectorAll(".modal-step");
  }

  // next/back buttons
  if (steps.length > 0) {
    document.querySelectorAll(".next").forEach(btn => {
      btn.addEventListener("click", () => {
        let nextStep = btn.dataset.next;

        steps.forEach(step => step.classList.add("d-none"));
        document.getElementById(nextStep)?.classList.remove("d-none");
      });
    });

    document.querySelectorAll(".back").forEach(btn => {
      btn.addEventListener("click", () => {
        let prevStep = btn.dataset.back;

        steps.forEach(step => step.classList.add("d-none"));
        document.getElementById(prevStep)?.classList.remove("d-none");
      });
    });
  }

  // Handle Email Form Submit
  const emailForm = document.getElementById('emailSignupForm');
  if (emailForm) {
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault();

      //Validate, send to API, etc. here. We prob don't have time for this.

      window.location.href = "profile.html"; // <-- User logged-in page
    });
  }




  //Hard coding a user for the demo, content like name/event/user can be changed lol I just googled random name generator.

  // function createHardcodedAccount(){
  //   const user = {
  //     name: "Evan Mitchell",
  //     organization: "Farmer's Market",
  //     username: "e_mitchell",
  //     email: "demo@gmail.com",
  //     role: "organizer",
  //     location: "Orlando, FL",
  //   };
  // }



// Script for the uploadevent.html page
// Tags
  const tags = document.getElementById("tags");
  const inputTag = document.getElementById("inputTag");

  if (inputTag && tags) {
    inputTag.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();

        const tagContent = inputTag.value.trim();
        if (tagContent === "") return;

        const tag = document.createElement("li");
        tag.innerHTML = `${tagContent} <button class="delete-button">X</button>`;
        tags.appendChild(tag);
        inputTag.value = "";
      }
    });

    tags.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
      }
    });
  }


// Duration Box (uploadevent.html)
// script.js
  const endTimePicker = document.getElementById("endTimePicker");
  const durationBox = document.getElementById("duration");

  if (endTimePicker && durationBox) {
    endTimePicker.addEventListener("input", () => {
      if (endTimePicker.value) {
        durationBox.style.display = "block";
        calculateDuration();
      } else {
        durationBox.style.display = "none";
      }
    });
  }

  function calculateDuration() {
    const startDate = document.getElementById('startDate');
    const startTime = document.getElementById('startTime');
    const result = document.getElementById('result');

    if (!startDate || !startTime || !endTimePicker) return;

    const start = new Date(`${startDate.value}T${startTime.value}`);
    const end = new Date(endTimePicker.value);

    if (!start || !end || isNaN(start) || isNaN(end)) {
      result.textContent = "Invalid date/time.";
      return;
    }
    let diff = end - start;
    if (diff < 0) {
      result.textContent = "End time must be after start time.";
      return;
    }

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    result.textContent = `Duration: ${hours}h ${minutes}m ${seconds}s`;
  }




// Event Settings reveal sections
  document.querySelectorAll(".toggle").forEach(toggler => {
    toggler.addEventListener("change", function () {
      const box = document.querySelector(this.dataset.target);
      if (!box) return;

      box.classList.toggle("show", this.checked);
    });
  });



// Upload Image button
  const fileInput = document.querySelector("#selectFile");
    const fileLabel = document.querySelector("#blankFile");
    const successIcon = document.querySelector(".success");

    if (fileInput && fileLabel && successIcon) {
      fileInput.addEventListener("change", function () {
        const file = this.files[0];

        if (!file) {
          fileLabel.textContent = "No file chosen...";
          successIcon.style.display = "none";
          return;
        }

        fileLabel.textContent = file.name;
        successIcon.style.display = "inline-block";
      });
    }

// Uploadevents.html validation
const bvForms = document.querySelectorAll(".needs-validation");
  bvForms.forEach(f => {
    f.addEventListener("submit", e => {
      if (!f.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      f.classList.add("was-validated");
    });
  });

});