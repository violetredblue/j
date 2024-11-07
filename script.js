// Get the form element
const form = document.getElementById("contactForm");

// Function to handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        form.reset(); // Clear form fields
    } else {
        alert("Please fill in all fields.");
    }
});