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
