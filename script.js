let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let btn = document.querySelector("#submit-btn");
let agree = document.querySelector("#agreement");
let counter = document.querySelector("#counter");

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
    btn.addEventListener("click", stopSubmit);
  } else {
    btn.setAttribute("disabled", true);
  }
}

function contadorCaracteres(campoDigitado) {
  let maxCaracteres = document
    .querySelector("#textarea")
    .getAttribute("maxlength");
  let digitado = campoDigitado.value.length;
  let rest = maxCaracteres - digitado;
  counter.innerHTML = rest;
}

function stopSubmit(event) {
  event.preventDefault();
}

let form1 = document.querySelector("#evaluation-form");
let form2 = document.querySelector("#form-data");

btn.addEventListener("click", function () {
  if (form1.style.display === "flex") {
    form1.style.display = "none";
    form2.style.display = "flex";
    outroForm();
  } else {
    form1.style.display = "flex";
    form2.style.display = "none";
  }
});

function outroForm() {
  names();
  email1();
  casa();
  family();
  materia();
  avaliacao();
  observacao();
}
// let inputName = document.querySelector('#input-name').value;
// let sobreNome = document.querySelector('#input-lastname').value;
// dados += '<p>' + 'Nome: ' + inputName + ' ' + sobreNome + '</p>';

// let getEmail = document.querySelector('#input-email').value;
// dados += '<p>' + 'Email: ' + getEmail + '</p>';

// let getCasa = document.querySelector('#house').value;
// dados += '<p>' + 'Casa: ' + getCasa + '</p>';

// let getFamilia = document.querySelector('input[name='family']:checked').value;
// dados += '<p>' + 'Família: ' + getFamilia + '</p>';

// let getAvaliacao = document.querySelector('input[name='rate']:checked').value;
// dados += '<p>' + 'Avaliação: ' + getAvaliacao + '</p>';

// let getObservacoes = document.querySelector('#textarea').value;
// dados += '<p>' + 'Observações: ' + getObservacoes + '</p>';

// function teste() {
//   let materia = document.querySelectorAll('input[name='subject']:checked');
//   let getMateria = [];
//   for (var i = 0; i < materia.length; ++i) {
//     getMateria.push(' ' + materia[i].value);
//   }
//   dados = '<p>' + 'Matérias: ' + getMateria + '</p>';
// }

function names() {
  let dados = document.querySelector("#name").innerHTML;
  let inputName = document.querySelector("#input-name").value;
  let sobreNome = document.querySelector("#input-lastname").value;
  dados += "<p>" + "Nome: " + inputName + " " + sobreNome + "</p>";
  document.querySelector("#name").innerHTML = dados;
}
function email1() {
  let dados = document.querySelector("#email1").innerHTML;
  let getEmail = document.querySelector("#input-email").value;
  dados = "<p>" + "Email: " + getEmail + "</p>";
  document.querySelector("#email1").innerHTML = dados;
}

function casa() {
  let dados = document.querySelector("#houses").innerHTML;
  let getCasa = document.querySelector("#house").value;
  dados += "<p>" + "Casa: " + getCasa + "</p>";
  document.querySelector("#houses").innerHTML = dados;
}
function family() {
  let dados = document.querySelector("#familys").innerHTML;
  let getFamilia = document.querySelector('input[name="family"]:checked').value;
  dados += "<p>" + "Família: " + getFamilia + "</p>";
  document.querySelector("#familys").innerHTML = dados;
}
function materia() {
  let dados = document.querySelector("#materias").innerHTML;
  let materia = document.querySelectorAll('input[name="subject"]:checked');
  let getMateria = [];
  for (var i = 0; i < materia.length; ++i) {
    getMateria.push(" " + materia[i].value);
  }
  dados = "<p>" + "Matérias: " + getMateria + "</p>";
  document.querySelector("#materias").innerHTML = dados;
}

function avaliacao() {
  let dados = document.querySelector("#avaliacoes").innerHTML;
  let getAvaliacao = document.querySelector('input[name="rate"]:checked').value;
  dados += "<p>" + "Avaliação: " + getAvaliacao + "</p>";
  document.querySelector("#avaliacoes").innerHTML = dados;
}

function observacao() {
  let dados = document.querySelector("#observacoes").innerHTML;
  let getObservacoes = document.querySelector("#textarea").value;
  dados += "<p>" + "Observações: " + getObservacoes + "</p>";
  document.querySelector("#observacoes").innerHTML = dados;
}
