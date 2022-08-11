let email = document.querySelector("#email");
let pass = document.querySelector("#pass");

function verificaSenha() {
  if (email.value === "tryber@teste.com" && pass.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}
