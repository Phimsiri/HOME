document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    loginForm.appendChild(errorMessage);
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const roleSelect = document.getElementById("role");
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      const role = roleSelect.value;
  
      // Validate if all fields are filled
      if (!username || !password || !role) {
        errorMessage.textContent = "à¸à¸£à¸¸à¸“à¸²à¸à¸£à¸­à¸à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹ƒà¸«à¹‰à¸„à¸£à¸šà¸–à¹‰à¸§à¸™";
        return;
      }
  
      // Check user credentials
      let isValid = false;
      switch (role) {
        case "buyer":
          isValid = username === "andy" && password === "a1234";
          break;
        case "seller":
          isValid = username === "bobby" && password === "a2345";
          break;
        case "visitor":
          isValid = username === "candy" && password === "a3456";
          break;
      }
  
      // Display appropriate message
      if (isValid) {
        window.location.href = "https://www.example.com";
      } else {
        errorMessage.textContent =
          "à¸œà¸¹à¹‰à¹ƒà¸Šà¹‰à¹„à¸¡à¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡ à¸à¸£à¸¸à¸“à¸²à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸Šà¸·à¹ˆà¸­à¸œà¸¹à¹‰à¹ƒà¸Šà¹‰à¹à¸¥à¸°à¸£à¸«à¸±à¸ªà¸œà¹ˆà¸²à¸™à¸‚à¸­à¸‡à¸—à¹ˆà¸²à¸™ à¹à¸¥à¹‰à¸§à¸¥à¸­à¸‡à¹ƒà¸«à¸¡à¹ˆà¸­à¸µà¸à¸£à¸­à¸š";
      }
    });
  });