document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            dob: document.getElementById('dob').value,
            gender: document.getElementById('gender').value,
            address: document.getElementById('address').value,
            timestamp: new Date().toISOString()
        };

        // Get existing users from localStorage
        let users = JSON.parse(localStorage.getItem('users') || '[]');

        // Add new user
        users.push(formData);

        // Save updated users array
        localStorage.setItem('users', JSON.stringify(users));

        // Reset form
        form.reset();

        alert('Registration successful!');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const modal = document.getElementById('successModal');
    const closeBtn = modal.querySelector('.close');
    const modalBtn = modal.querySelector('.modal-btn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            dob: document.getElementById('dob').value,
            gender: document.getElementById('gender').value,
            address: document.getElementById('address').value,
            timestamp: new Date().toISOString()
        };

        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(formData);
        localStorage.setItem('users', JSON.stringify(users));

        form.reset();
        modal.style.display = "block";
    });

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener('click', closeModal);
    modalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});