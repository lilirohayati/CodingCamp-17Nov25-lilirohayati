
let userName = prompt("Enter your name:");
if (userName === null || userName.trim() === "") {
  userName = "Guest";
}

document.getElementById("welcome-text").innerText = "Hi, " + userName;

const form = document.getElementById("messageForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("All fields must be filled!");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email!");
    return;
  }

  if (isNaN(phone)) {
    alert("Phone number must contain only numbers!");
    return;
  }

  // Show result
  document.getElementById("resultName").innerText = "Name: " + name;
  document.getElementById("resultEmail").innerText = "Email: " + email;
  document.getElementById("resultPhone").innerText = "Phone: " + phone;
  document.getElementById("resultMessage").innerText = "Message: " + message;

  form.reset();
});
