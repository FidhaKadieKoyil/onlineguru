document.addEventListener('DOMContentLoaded', function(){
    const nameInput=document.getElementById('name');
    nameInput.focus();
    document.getElementById('contactForm').addEventListener('submit', submitForm);
})


function submitForm(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
   
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate the form data
    if (!name || !email || !subject || !message) {
        document.getElementById('statusMessage').textContent = 'Please fill in all fields.';
        return;
    }
    
   
    document.getElementById('contactForm').reset();
    document.getElementById('statusMessage').textContent = 'Form submitted successfully!';
}
