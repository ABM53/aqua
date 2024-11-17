document.addEventListener('DOMContentLoaded', function () {
  const quotes = [
    "Water is the driving force of all nature. – Leonardo da Vinci",
    "Drinking water is essential to maintaining good health. – Unknown",
    "Pure water is the world’s first and foremost medicine. – Slovakian Proverb",
    "The body is over 60% water. It’s essential to drink enough! – Unknown",
    "Water is life. Drink plenty of it. – Unknown",
  "Healthy citizens are the greatest asset any country can have.” – Winston Churchill",
   "Health is a state of complete harmony of the body, mind and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open.” – B.K.S. Iyengar",
    "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.” -William Londen",
    "Physical fitness is the first requisite of happiness.” – Joseph Pilates",
    // "The human body has been designed to resist an infinite number of changes and attacks brought about by its environment. The secret of good health lies in successful adjustment to changing stresses on the body.” – Harry J. Johnson"
  ];

  let currentQuoteIndex = 0;

  // Function to change quote every few seconds
  function changeQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  }

  // Initial quote change
  changeQuote();

  // Change quote every 5 seconds (5000ms)
  setInterval(changeQuote, 5000);
});
