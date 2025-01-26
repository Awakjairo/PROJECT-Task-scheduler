// script.js
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your own authentication logic
    if (username === 'awakjairo' && password === 'password') {
        window.location.href = 'homepage.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
