document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
  
    // Calculate recommended water intake (in liters)
    var waterIntake = age < 30 ? 2.5 : age < 60 ? 2 : 1.5; // Simple example
  
    // Display user info
    document.getElementById("userName").textContent = name;
    document.getElementById("userAge").textContent = age;
    document.getElementById("waterIntake").textContent = `We recommend drinking ${waterIntake} liters of water daily.`;
  
    // Show the user info section
    document.getElementById("userInfo").style.display = "block";
  });
  
  // Reminder functionality
  function setReminder() {
    alert("You will receive a reminder to drink water every 2 hours!");
  }
  