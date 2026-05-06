document.getElementById("greetingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const goal = document.getElementById("goal").value;
    const messageBox = document.getElementById("messageBox");

    messageBox.textContent = "Hello, " + name + "! ProDrive can help you practice " + goal + " in a safe virtual driving environment.";
    messageBox.style.display = "block";
});
