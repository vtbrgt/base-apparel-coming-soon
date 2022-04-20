function validaEmail() {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const emailTest = regex.test(email.value);
  let error = document.getElementById("erro_email");
  let borda = document.querySelector(".formulario");

  if (!emailTest) {
    error.innerHTML = "<p>Please provide a valid email</p>";
    borda.style.borderColor = "hsl(0, 93%, 68%)";
    borda.style.borderWidth = "3px";
  }
}
/* 
function redefineMensagem() {
  let error = document.getElementById("erro_email");
  if (error.innerHTML == "Please provide a valid email") {
    error.innerHTML = "";
  }
} */
