
document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('https://bubblebitx-server.onrender.com/api/contact-us', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Message sent successfully');
            console.log(result);
        } else {
            const error = await response.text();
            alert('Error sending message: ' + error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});
