document.addEventListener('DOMContentLoaded', function () {

    // Get elements from the DOM
    const setReminderBtn = document.getElementById('setReminderBtn');
    const countdownTimer = document.getElementById('countdownTimer');
    const reminderTimeInput = document.getElementById('reminderTime');
  
    // Function to update the countdown timer
    function updateCountdown(remainingTime) {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      countdownTimer.textContent = `Time left: ${minutes} minutes ${seconds} seconds`;
    }
  
    // Set reminder functionality
    setReminderBtn.addEventListener('click', function () {
      const reminderTime = parseInt(reminderTimeInput.value);
  
      if (!reminderTime || reminderTime < 1) {
        alert("Please enter a valid time.");
        return;
      }
  
      let timeRemaining = reminderTime * 60; // Convert minutes to seconds
      updateCountdown(timeRemaining); // Display the initial time left
  
      // Create an audio object for the sound
      const reminderSound = new Audio('https://www.soundjay.com/button/beep-07.wav'); // Replace with your own sound file if needed
  
      // Start countdown
      const countdownInterval = setInterval(function () {
        timeRemaining--; // Decrease the remaining time by 1 second
        updateCountdown(timeRemaining);
  
        if (timeRemaining <= 0) {
          clearInterval(countdownInterval); // Stop the countdown
          reminderSound.play(); // Play the sound
          alert("Time's up! Drink water now.");
          countdownTimer.textContent = "Reminder: Drink Water!";
        }
      }, 1000); // Update every second
    });
  
  });
  