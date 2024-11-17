document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent the default form submission (which causes a page reload)

    // Define correct answers
    const correctAnswers = {
      q1: 'b',  // 2-3 liters
      q2: 'a',  // Improved digestion
      q3: 'b',   // Drinking water in small sips throughout the day
      q4: 'b'   // Drinking water in small sips throughout the day
     
    };

    let score = 0;
    let feedbackHTML = '';

    // Check the selected answers for each question
    for (let i = 1; i <= 4; i++) {
      const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
      if (selectedAnswer) {
        // Check if the answer is correct
        if (selectedAnswer.value === correctAnswers[`q${i}`]) {
          score++;
          feedbackHTML += `<p>Question ${i}: Correct!</p>`;
        } else {
          feedbackHTML += `<p>Question ${i}: Incorrect. The correct answer is: ${correctAnswers[`q${i}`]}</p>`;
        }
      } else {
        feedbackHTML += `<p>Question ${i}: You did not answer this question.</p>`;
      }
    }

    // Display the result
    const resultMessage = `You answered ${score} out of 4 questions correctly.`;
    document.getElementById("score").textContent = resultMessage;
    document.getElementById("feedback").innerHTML = feedbackHTML;

    // Hide the quiz and show the results
    document.getElementById("quizContainer").style.display = "none";  // Hide the quiz form
    document.getElementById("quizResults").style.display = "block";   // Show the results
  });
});
