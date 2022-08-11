let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let btn = document.querySelector("#submit-btn");
let agree = document.querySelector("#agreement");

function verificaSenha() {
  if (email.value === "tryber@teste.com" && pass.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

function ativar() {
  if (agree.checked) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", true);
  }
}
