function openLoginForm() {
    document.getElementById("loginOverlayForm").style.display = "flex";
}

function closeLoginForm() {
    document.getElementById("loginOverlayForm").style.display = "none";
}

function openRegisterForm() {
    document.getElementById("registerOverlayForm").style.display = "flex";
}

function closeRegisterForm() {
    document.getElementById("registerOverlayForm").style.display = "none";
}

function changeToRegisterForm() {
    document.getElementById("loginOverlayForm").style.display = "none";
    document.getElementById("registerOverlayForm").style.display = "flex";
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    loginAccount(); 
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
}

function logoutAccount() {
    document.getElementById("login").style.display = "inline-block";
    document.getElementById("register").style.display = "inline-block";
    document.getElementById("username").textContent = "";
    document.getElementById("username").style.display = "none";
    document.getElementById("logout").style.display = "none";
}