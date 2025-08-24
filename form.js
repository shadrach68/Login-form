const body = document.getElementById("body");
const form = document.getElementById("login-form");
const headerText = document.getElementById("header");
const passlab = document.getElementById("passlab");
const userlab = document.getElementById("userlab");
const nameInput = document.getElementById("username");
const userpassInput = document.getElementById("password");
const logButton = document.querySelector("button");

body.style.backgroundColor = "rgba(0, 5, 9, 0.19)";

form.style.width = "300px";
form.style.margin = "180px auto";
form.style.padding = "70px 40px";
form.style.backgroundColor = "#fff"
form.style.border = "1px solid";
form.style.borderRadius = "15px";
form.style.boxShadow = "0 0 20px #000";

headerText.style.color = "rgba(33, 53, 95, 1)";
headerText.style.marginLeft = "105px";
headerText.style.fontSize = "40px";
headerText.style.fontWeight = "800";

passlab.style.fontSize = "20px";

userlab.style.fontSize = "20px";

nameInput.style.width = "92%";
nameInput.style.height = "30px";
nameInput.style.marginBottom = "10px";
nameInput.style.padding = "10px";
nameInput.style.border = "1px solid #000";
nameInput.style.borderRadius = "15px";

userpassInput.style.width = "92%";
userpassInput.style.height = "30px";
userpassInput.style.marginBottom = "10px";
userpassInput.style.padding = "10px";
userpassInput.style.border = "1px solid #000";
userpassInput.style.borderRadius = "15px";

logButton.style.width = "100%";
logButton.style.height = "40px";
logButton.style.background = "rgba(33, 53, 95, 1)";
logButton.style.color = "#fff";
logButton.style.fontWeight = "800";
logButton.style.fontSize = "18px";
logButton.style.border = "none";
logButton.style.borderRadius = "10px";
logButton.style.cursor = "pointer";

logButton.addEventListener("mouseover", () => {
    logButton.style.background = "#2b526bff";
    logButton.style.boxShadow = "0 0 10px blue";
});

logButton.addEventListener("mouseout", () => {
    logButton.style.background = "rgba(33, 53, 95, 1)";
    logButton.style.boxShadow = "none";
});
