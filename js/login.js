const passwordInput = document.getElementById('password-input');
const showIcon = document.getElementById('show-icon');
const hideIcon = document.getElementById('hide-icon');
const usernameInput = document.querySelector('input[type="text"]'); 
const loginForm = document.querySelector('form'); 

const correctUsername = 'hary';
const correctPassword = '12345678';

const showPassword = () => {
   passwordInput.type = 'text'; 
   showIcon.style.display = 'none';  
   hideIcon.style.display = 'inline';
};

const hidePassword = () => {
   passwordInput.type = 'password';
   showIcon.style.display = 'inline'; 
   hideIcon.style.display = 'none';
};

const handleLogin = (event) => {
    event.preventDefault(); 

    const enteredUsername = usernameInput.value; 
    const enteredPassword = passwordInput.value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        alert('Login berhasil!');
        window.location.href = 'home.html';
    } else {
        alert('Username atau password salah!');
    }
};

showIcon.addEventListener('click', showPassword);
hideIcon.addEventListener('click', hidePassword);

loginForm.addEventListener('submit', handleLogin);
