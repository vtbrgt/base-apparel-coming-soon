function validaEmail() {
  var email = document.querySelector("#email");
  var error = document.getElementById("erro_email");
  var borda = document.getElementsByClassName("formulario");

  if (!email.checkValidity()) {
    error.innerHTML = "Please provide a valid email";
    borda.style.borderColor = "hsl(0, 93%, 68%)";
  }
}

function redefineMensagem() {
  var error = document.getElementById("erro_email");
  if (error.innerHTML == "Please provide a valid email") {
    error.innerHTML = "";
  }
}
