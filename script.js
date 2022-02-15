var signInForm = document.querySelector(".container");
var regForm = document.querySelector(".regContainer");
var eyeicon = document.querySelectorAll(".pwdreveal");
var regbtn = document.getElementById("regbtn");
var signInbtn = document.getElementById("signInbtn");
var pwd = document.getElementById("regpassword");
var cfmpwd = document.getElementById("cfmpassword");
function signIn() {
  regForm.style.display = "none";
  signInForm.style.display = "initial";
}
function reg() {
  signInForm.style.display = "none";
  regForm.style.display = "initial";
}
eyeicon.forEach((el) => {
  el.onclick = function () {
    var pwd = this.previousElementSibling;
    pwd.type == "password"
      ? (this.innerHTML = `<i class='far fa-eye'></i>`)
      : (this.innerHTML = `<i class='far fa-eye-slash'></i>`);
    pwd.type = pwd.type == "password" ? "text" : "password";
  };
});
regbtn.onclick = (ev) => {
  if (pwd.value != cfmpassword.value) {
    ev.preventDefault();
    cfmpwd.value = "";
    cfmpwd.setAttribute("placeholder", "Password should match");
    cfmpwd.style.color = "red";
    cfmpwd.onfocus = function () {
      this.setAttribute("placeholder", "Re-enter your password");
      this.style.color = "initial";
    };
  }
};
