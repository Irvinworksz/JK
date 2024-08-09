// Function to validate the form
function validateForm(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission if fields are empty
    }
}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signup-form form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }

    // Add click event listeners to images
    const images = document.querySelectorAll('.container img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            alert('Image clicked!');
        });
    });

    const logos = document.querySelectorAll('.logos img');
    logos.forEach(logo => {
        logo.addEventListener('click', () => {
            alert('Logo clicked!');
        });
    });
});
