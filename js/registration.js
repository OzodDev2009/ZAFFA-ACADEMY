document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    var icon = document.getElementById('togglePassword');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});


var btn = document.getElementById('btn');
var login = document.getElementById('login');
var password = document.getElementById('password');


btn.addEventListener('click', function () {
    if (login.value == 'ZAFFA') {
        if (password.value == 'Zafarbek') {
            alert('ZAFFA ACADEMY Добро пожаловать');
            window.location.href = "./html/index.html"
        } else {
            alert('Ошибка: Неверный пароль');
        }
    } else {
        alert('Ошибка: Неверный логин или пароль');
    }
});
