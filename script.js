const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const btn = document.querySelector('#submit-btn');
const btnLogin = document.querySelector('#btnLogin');
const agree = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
// const textArea = document.querySelector('#textarea');

function verificaSenha() {
  if (email.value === 'tryber@teste.com' && pass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', verificaSenha);

function ativar() {
  if (agree.checked) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', true);
  }
}
agree.addEventListener('click', ativar);

btn.addEventListener('click', (event) => {
  event.preventDefault();
});

function contadorCaracteres(campoDigitado) {
  const maxCaracteres = document
    .querySelector('#textarea')
    .getAttribute('maxlength');
  const digitado = campoDigitado.value.length;
  const rest = maxCaracteres - digitado;
  counter.innerHTML = rest;
}

const texto = document.querySelector('#textarea');
texto.addEventListener('onekeypress', contadorCaracteres);

const form1 = document.querySelector('#evaluation-form');
const form2 = document.querySelector('#form-data');

function names() {
  let dados = document.querySelector('#name').innerHTML;
  const inputName = document.querySelector('#input-name').value;
  const sobreNome = document.querySelector('#input-lastname').value;
  dados += `${'<p> Nome: '}${inputName}${' '}${sobreNome}</p>`;
  document.querySelector('#name').innerHTML = dados;
}
function email1() {
  let dados = document.querySelector('#email1').innerHTML;
  const getEmail = document.querySelector('#input-email').value;
  dados = `${'<p> Email: '}${getEmail}</p>`;
  document.querySelector('#email1').innerHTML = dados;
}

function casa() {
  let dados = document.querySelector('#houses').innerHTML;
  const getCasa = document.querySelector('#house').value;
  dados += `${'<p> Casa: '}${getCasa}</p>`;
  document.querySelector('#houses').innerHTML = dados;
}
function family() {
  let dados = document.querySelector('#familys').innerHTML;
  const getFamilia = document.querySelector('input[name="family"]:checked').value;
  dados += `${'<p> Família: '}${getFamilia}</p>`;
  document.querySelector('#familys').innerHTML = dados;
}
function materias() {
  let dados = document.querySelector('#materias').innerHTML;
  const materia = document.querySelectorAll('input[name="subject"]:checked');
  const getMateria = [];
  for (let i = 0; i < materia.length; i += 1) {
    getMateria.push(` ${materia[i].value}`);
  }
  dados = `${'<p> Matérias: '}${getMateria}</p>`;
  document.querySelector('#materias').innerHTML = dados;
}

function avaliacao() {
  let dados = document.querySelector('#avaliacoes').innerHTML;
  const getAvaliacao = document.querySelector('input[name="rate"]:checked').value;
  dados += `${'<p> Avaliação: '}${getAvaliacao}</p>`;
  document.querySelector('#avaliacoes').innerHTML = dados;
}

function observacao() {
  let dados = document.querySelector('#observacoes').innerHTML;
  const getObservacoes = document.querySelector('#textarea').value;
  dados += `${'<p> Observações: '}${getObservacoes}</p>`;
  document.querySelector('#observacoes').innerHTML = dados;
}

btn.addEventListener('click', () => {
  if (form1.style.display === 'flex') {
    form1.style.display = 'none';
    form2.style.display = 'flex';
    names();
    email1();
    casa();
    family();
    materias();
    avaliacao();
    observacao();
  } else {
    form1.style.display = 'flex';
    form2.style.display = 'none';
  }
});

// contadorCaracteres();
