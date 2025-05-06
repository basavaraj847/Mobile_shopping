// Signup
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
        localStorage.setItem('loggedIn', 'true');
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials');
    }
});
