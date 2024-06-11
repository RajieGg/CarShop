document.getElementById('loginButton').addEventListener('click', function(){
    var loginForm = document.getElementById('loginForm');
    var regForm = document.getElementById('regForm');
    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
    }
})

document.getElementById('registerButton').addEventListener('click', function(){
    var regForm = document.getElementById('regForm');
    var loginForm = document.getElementById('loginForm');
    if (regForm.classList.contains('hidden')) {
        regForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
    }
})