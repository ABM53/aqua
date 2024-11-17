document.addEventListener('DOMContentLoaded', function () {

  // Get form elements
  const userInfoForm = document.getElementById('userInfoForm');
  const usernameInput = document.getElementById('username');
  const ageInput = document.getElementById('age');
  const waterAmountInput = document.getElementById('waterAmount');
  const userInfoSection = document.getElementById('userInfoSection');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const suggestedWaterIntake = document.getElementById('suggestedWaterIntake');

  // Handle form submission
  userInfoForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Get user data from form inputs
      const username = usernameInput.value;
      const age = parseInt(ageInput.value);
      const waterAmount = parseFloat(waterAmountInput.value);

      // Validate form data
      if (!username || !age || !waterAmount) {
          alert("Please fill in all the fields.");
          return;
      }

      // Display welcome message
      welcomeMessage.textContent = `Welcome, ${username}!`;

      // Calculate and display suggested water intake (e.g., based on age)
      let suggestedAmount = 2.7; // Default suggested intake in liters for an average adult
      if (age < 30) {
          suggestedAmount = 3; // Increase for younger individuals
      } else if (age > 60) {
          suggestedAmount = 2.5; // Decrease for older individuals
      }

      // Show suggested water intake
      suggestedWaterIntake.textContent = `Suggested Daily Water Intake: ${suggestedAmount} liters`;

      // Hide the form after submission
      userInfoForm.style.display = 'none';

      // Show the result section
      userInfoSection.style.display = 'block';
  });

});


document.addEventListener('DOMContentLoaded', function () {

  // Get elements from the DOM
  const startStopwatchBtn = document.getElementById('startStopwatchBtn');
  const timerDisplay = document.getElementById('timerDisplay');
  const logList = document.getElementById('logList');
  const reminderTimeInput = document.getElementById('reminderTimeInput');
  let countdownInterval;

  // Function to update the countdown display
  function updateCountdown(remainingTime) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerDisplay.textContent = `Time Left: ${minutes} minutes ${seconds} seconds`;
  }

  // Function to add log message
  function addLogMessage(message) {
    const logItem = document.createElement('li');
    logItem.classList.add('list-group-item');
    logItem.textContent = message;
    logList.appendChild(logItem);
  }

  // Start Stopwatch functionality
  startStopwatchBtn.addEventListener('click', function () {
    const reminderTime = parseInt(reminderTimeInput.value);

    // Check if reminder time is valid
    if (!reminderTime || reminderTime < 1) {
      alert("Please enter a valid reminder time.");
      return;
    }

    let timeRemaining = reminderTime * 60; // Convert minutes to seconds
    updateCountdown(timeRemaining); // Display the initial time left

    // Add log when timer is started
    addLogMessage(`Reminder set for ${reminderTime} minutes.`);

    // Start countdown
    countdownInterval = setInterval(function () {
      timeRemaining--; // Decrease the remaining time by 1 second
      updateCountdown(timeRemaining); // Update the timer display

      // When the time reaches 0, stop the countdown and trigger reminder
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
        addLogMessage("Reminder: Time's up! Drink water now.");
        alert("Time's up! Drink water now.");
        timerDisplay.textContent = "Reminder: Drink Water!"; // Show reminder message
      }
    }, 1000); // Update every second

    startStopwatchBtn.disabled = true; // Disable the start button once clicked
  });

});
