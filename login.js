function openLoginForm() {
    document.getElementById("loginOverlayForm").style.display = "flex";
}

function closeLoginForm() {
    document.getElementById("loginOverlayForm").style.display = "none";
    let usernameError = document.getElementById("loginUsernameError");
    let passwordError = document.getElementById("loginPasswordError");

    usernameError.textContent = "";
    passwordError.textContent = "";
}

function openRegisterForm() {
    document.getElementById("registerOverlayForm").style.display = "flex";
}

function closeRegisterForm() {
    document.getElementById("registerOverlayForm").style.display = "none";
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");


    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
}

function changeToRegisterForm() {
    closeLoginForm();
    openRegisterForm();
}

function changeToLoginForm() {
    closeRegisterForm();
    openLoginForm();
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let usernameError = document.getElementById("loginUsernameError");
    let passwordError = document.getElementById("loginPasswordError");

    usernameError.textContent = "";
    passwordError.textContent = "";
    
    let isValid = true;

    if(!username) {
        usernameError.textContent = "*Vui lòng nhập tên đăng nhập";
        isValid = false;
    }

    if(!password) {
        passwordError.textContent = "*Vui lòng nhập mật khẩu";
        isValid = false;
    }
    
    if(!isValid) {
        event.preventDefault(); 
    }
    else {
        event.preventDefault();
        loginAccount();
    }
});

function loginAccount() {
    let username = document.getElementById("loginUsername").value;
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("username").textContent = `${username}`;
    document.getElementById("username").style.display = "inline-block";
    document.getElementById("logout").style.display = "inline-block";
    document.getElementById("loginOverlayForm").style.display = "none";
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
    window.alert("Đăng nhập thành công");
}

function logoutAccount() {
    document.getElementById("login").style.display = "inline-block";
    document.getElementById("register").style.display = "inline-block";
    document.getElementById("username").textContent = "";
    document.getElementById("username").style.display = "none";
    document.getElementById("logout").style.display = "none";
}

document.getElementById("registerForm").addEventListener("submit", function (event) {
    let username = document.getElementById("registerUsername").value.trim();
    let password = document.getElementById("registerPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");


    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    
    let isValid = true;

    if(!username) {
        usernameError.textContent = "*Vui lòng nhập tên đăng nhập";
        isValid = false;
    }else if(username.length < 10) {
        usernameError.textContent = "*Tên đăng nhập phải có ít nhất 10 ký tự";
        isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!password) {
        passwordError.textContent = "*Vui lòng nhập mật khẩu";
        isValid = false;
    }else if(!passwordRegex.test(password)) {
        passwordError.textContent = "*Mật khẩu phải gồm ít nhất 8 ký tự và bao gồm 1 chữ cái in hoa, một chữ cái thường, một số và 1 ký tự đặc biệt";
        isValid = false;
    }

    if(confirmPassword !== password) {
        confirmPasswordError.textContent = "*Mật khẩu không khớp";
        isValid = false;
    }

    const phoneRegex = /^0[1-9][0-9]{2}[-\s]?[0-9]{3}[-\s]?[0-9]{3}$/;
    if(!phoneRegex.test(phone)) {
        phoneError.textContent = "*Số điện thoại không đúng định dạng";
        isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)) {
        emailError.textContent = "*Email không đúng định dạng";
        isValid = false;
    }

    if(!isValid) {
        event.preventDefault(); 
    }else{
        event.preventDefault(); 
        registerAccount();
    }
});

function registerAccount() {
    closeRegisterForm();
    window.alert("Đăng ký thành công");
}