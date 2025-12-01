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



  //Hard coding a user for the demo, content like name/event/user can be changed lol I just googled random name generator.
  function createHardcodedAccount(){
  const user = {
    name: "Evan Mitchell",
    organization: "Farmer's Market",
    username: "e_mitchell",
    email: "demo@gmail.com",
    role: "organizer",
    location: "Orlando, FL",
  };

}



// Script for the uploadevent.html page
// Tags
const tags = document.getElementById('tags');
const input = document.getElementById('inputTag');

input.addEventListener('keydown', function (event){
  if(event.key === 'Enter') {
    event.preventDefault();

    const tag = document.createElement('li');
            
    const tagContent = input.value.trim();
            
    if (tagContent !== '') {            
      tag.innerText = tagContent;
      tag.innerHTML += '<button class="delete-button">X</button>';
                    
      tags.appendChild(tag);                    
      input.value = '';                
    }
  }
});

tags.addEventListener('click', function (event){
  if (event.target.classList.contains('delete-button')) {
    event.target.parentNode.remove();
  }
});


// Duration Box
// script.js
function calculateDuration() {
    const startDate = document.getElementById('startDate').value;
    const startTime = document.getElementById('startTime').value;
    const endInput = document.getElementById('endTimePicker').value;
    const resultParagraph = document.getElementById('result');

    // Need all fields
    if (!startDate || !startTime || !endInput) {
        resultParagraph.textContent = "Please enter both a start and end date/time.";
        return;
    }

    // Build ISO timestamp from separate date + time
    const startISO = `${startDate}T${startTime}`;
    const start = new Date(startISO);
    const end = new Date(endInput);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        resultParagraph.textContent = "Invalid date/time.";
        return;
    }

    // Calculate duration
    let diff = end - start;

    if (diff < 0) {
        resultParagraph.textContent = "End time must be after the start time.";
        return;
    }

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    resultParagraph.textContent =
        `Duration: ${hours} hours, ${formattedMinutes} minutes, ${formattedSeconds} seconds.`;
}

// Show duration box when endTime changes
const endTimePicker = document.getElementById('endTimePicker');
const durationBox = document.getElementById('duration');

endTimePicker.addEventListener('input', function () {
    if (this.value) {
        durationBox.style.display = "block";
        calculateDuration();
    } else {
        durationBox.style.display = "none";
    }
});


// Event Settings reveal sections
document.querySelectorAll(".toggle").forEach(toggler => {
    toggler.addEventListener("change", function () {
        const targetSelector = this.dataset.target;
        const box = document.querySelector(targetSelector);

        if (!box) {
            console.error("Toggle error: No element found for", targetSelector);
            return;
        }

        if (this.checked) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
});


// Upload Image button
const fileInput = document.querySelector("#selectFile");
const fileLabel = document.querySelector("#blankFile");
const successIcon = document.querySelector(".success");

if (fileInput) {
  fileInput.addEventListener("change", function() {
    const file = this.files[0];

    if(!file) {
      fileLabel.textContent = "No file chosen...";
      // successIcon.computedStyleMap.display = "none";
      successIcon.style.display = "none";
      return;
    }

    //Set filename in UI
    fileLabel.textContent = file.name;
    successIcon.style.display = "inline-block";
  });
}


// Bootstrap Validation
const form = document.getElementById("eventForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    let isValid = true;

    // Basic Bootstrap validation
    if (!form.checkValidity()) {
        isValid = false;
    }

    // Validate start and end date/time
    const start = new Date(`${startDate.value}T${startTime.value}`);
    const end = new Date(endTimePicker.value);
    const endField = document.getElementById("endTimePicker");

    if (start >= end) {
        endField.setCustomValidity("End time must be after start time.");
        isValid = false;
    } else {
        endField.setCustomValidity("");
    }

    // Validate toggles
    document.querySelectorAll(".toggle").forEach(toggle => {
        const box = document.querySelector(toggle.dataset.target);
        const input = box.querySelector("input, select");

        if (toggle.checked) {
            if (!input.value.trim()) {
                input.setCustomValidity("Field required");
                isValid = false;
            } else {
                input.setCustomValidity("");
            }
        } else {
            input.setCustomValidity("");
        }
    });

    // Validate image upload
    const fileInput = document.getElementById("selectFile");
    if (!fileInput.files.length) {
        fileInput.setCustomValidity("Please upload an image.");
        isValid = false;
    } else {
        fileInput.setCustomValidity("");
    }

    form.classList.add("was-validated");

    // If everything is good:
    if (isValid) {
        console.log("Form Passed Validation");
        // You can replace this with a modal or AJAX submit
        alert("Form submitted successfully!");
    }
});

// Validation for sampleevents.html
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()