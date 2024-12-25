let users = [];

document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = btoa(document.getElementById('signup-password').value); // Simple encoding

    if (users.some(u => u.username === username)) {
        alert('User already exists!');
        return;
    }

    users.push({ username, password });
    alert('Signup successful!');
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = btoa(document.getElementById('login-password').value);

    if (!users.some(u => u.username === username && u.password === password)) {
        alert('Invalid login credentials!');
        return;
    }

    localStorage.setItem('currentUser', username);
    alert('Login successful!');
    window.location.href = 'tracker.html';
});
