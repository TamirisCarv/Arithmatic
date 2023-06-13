document.getElementById("btnSubmit").onclick = function () {
  let radios = document.getElementsByName("opcoes");
  let opcaoRadio;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      opcaoRadio = radios[i].value;
      tamAmostraMed(opcaoRadio);
    }
  }
};

function tamAmostraMed(opcaoRadio) {
  let desvPad = Number(document.getElementById("desvPad").value);
  let erro = Number(document.getElementById("erro").value);
  let grauConf;

  if (opcaoRadio == 90) {
    grauConf = 1.645;
  } else if (opcaoRadio == 95) {
    grauConf = 1.96;
  } else {
    grauConf = 2.575;
  }

  let amostra = (((grauConf * desvPad) / erro) ** 2).toFixed(2);
  // let amostra = (grauConf * desvPad / erro) * 2;

  let arredondar = Math.ceil(amostra); // aproximar o número para o próximo inteiro

  document.getElementById("resultado-amostra").innerHTML =
    '<div class="res"><h2>Intervalo de confiança: </h2> <h3>' +
    amostra +
    '</h3></div> <div class="res">' +
    "<h2>Inteiro mais próximo: </h2> <h3>" +
    arredondar +
    "</h3></div>";

  // document.getElementById("resultado").innerHTML =

  // '<h2>Intervalo de confiança: </h2> <h3>' +
  // arredondar +
  // '<img src="../assets/question.svg" alt="ícone de ajuda" title="Esse resultado já está arredondado para o inteiro mais próximo"> </h3>';
}

function insertRadio(value) {
  document.getElementById("grauConf-td").innerText = value;
}

document.querySelector("#desvPad").oninput = () => {
  document.querySelector("#desvPad-td").innerText = document
    .querySelector("#desvPad")
    .value.toUpperCase();
};

document.querySelector("#erro").oninput = () => {
  document.querySelector("#erro-td").innerText = document
    .querySelector("#erro")
    .value.toUpperCase();
};

// abrir modal do erro

const buttonErro = document.getElementById("valorErro-open");
const modalErro = document.querySelector(".dialog-erro");
const buttonCloseErro = document.querySelector("#buttonClose-erro");

buttonErro.onclick = function () {
  modalErro.showModal();
};

buttonCloseErro.onclick = function () {
  modalErro.close();
};
