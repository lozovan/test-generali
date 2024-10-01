document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name === '' || surname === '' || email === '' || phone === '') {
        event.preventDefault();
        return;
    }

    const emailField = document.getElementById('email');
    if (!emailField.checkValidity()) {
        event.preventDefault();
        return;
    }

    const phonePattern = /^\+?\d{9,15}$/;
    if (!phonePattern.test(phone)) {
        event.preventDefault();
        return;
    }
    alert('The form successfully filled!');
});