document.getElementById('login-button').addEventListener('click', function () {
    const userMail = document.getElementById('user-email');
    const getMail = userMail.value;
    console.log(getMail);
    const userPass = document.getElementById('user-password');
    const getPass = userPass.value;
    console.log(getPass);
    if (getMail == 'hlamo@gmail.com' && getPass == '12345') {
        window.location.href = 'banking.html';
    }

})