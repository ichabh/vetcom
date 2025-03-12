document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const formResponse = document.getElementById('formResponse');
            
            // Here you would typically send the form data to a server
            // For this example, we'll just display a success message
            formResponse.innerText = 'Form submitted successfully!';
            formResponse.style.color = 'green';
            
            // Clear form fields
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        });
    }
});
