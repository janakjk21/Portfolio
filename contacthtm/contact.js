var usernama = document.forms["vform"]["nama"];
var email = document.forms["vform"]["email"];
var password = document.forms["vform"]["password"];
var passwd_confirm = document.forms["vform"]["password_confirmation"];

var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var passwd_error = document.getElementById("passwd_error");

usernama.addEventListener("blur", verifikasiNama, true);
email.addEventListener("blur", verifikasiEmail, true);
password.addEventListener("blur", verifikasiPasswd, true);
passwd_confirm.addEventListener("blur", verifikasiPasswd2, true);
usernama.addEventListener("focus", namaJajal, true);

function Validate() {
    if (usernama.value == "") {
        usernama.style.border = "1px solid red";
        name_error.textContent = "Username Empty";
        usernama.focus();
    }
    if (email.value == "") {
        email.style.border = "1px solid red";
        email_error.textContent = "email empty";
        email.focus();
    }
    if (password.value == "" && passwd_confirm.value == "") {
        password.style.border = "1px solid red";
        passwd_confirm.style.border = "1px solid red";
        passwd_error.textContent = "password empty";
        password.focus();
    }
    if (password.value != passwd_confirm.value) {
        password.style.border = "1px solid red";
        passwd_confirm.style.border = "1px solid red";
        passwd_error.innerHTML = "Password not match";
    }
    return false;
}

function verifikasiNama() {
    if (usernama.value != "") {
        usernama.style.border = "1px solid silver";
        name_error.innerHTML = "";
        return true;
    }
}

function verifikasiEmail() {
    if (email.value != "") {
        email.style.border = "1px solid silver";
        email_error.innerHTML = "";
        return true;
    }
}

function verifikasiPasswd() {
    if (password.value != "") {
        password.style.border = "1px solid silver";
        passwd_error.innerHTML = "";
        return true;
    }
}

function verifikasiPasswd2() {
    if (passwd_confirm.value == password.value) {
        passwd_confirm.style.border = "1px solid silver";
        password.style.border = "1px solid silver";
        passwd_error.innerHTML = "";
        return true;
    }
}

function namaJajal() {
    if (
        (password.value != "" && passwd_confirm.value != "") ||
        passwd_confirm.value == password.value
    ) {
        passwd_confirm.style.border = "1px solid silver";
        password.style.border = "1px solid silver";
        passwd_error.innerHTML = "";
        return true;
    }
}