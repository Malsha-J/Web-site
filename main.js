const emailInput = document.getElementById("email");
  
  emailInput.addEventListener("input", function() {
    const email = emailInput.value;
    const emailGain = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailGain.test(email)) {
      emailInput.setCustomValidity("Invalid email address");
    } else {
      emailInput.setCustomValidity("");
    }
  });
