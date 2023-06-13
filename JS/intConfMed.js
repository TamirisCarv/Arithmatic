document.getElementById("btnSubmit").onclick = function () {
  let radios = document.getElementsByName("opcoes");
  let opcaoRadio;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      opcaoRadio = radios[i].value;
      calcular(opcaoRadio);
    }
  }
};

function calcular(opcaoRadio) {
  let media = Number(document.getElementById("media-input").value);
  // let grauConf = Number(document.getElementById('grauConf').value);
  let desvPad = Number(document.getElementById("desvPad-input").value);
  let tamAmostra = Number(document.getElementById("tamAmostra-input").value);
  let grauConf;

  if (opcaoRadio == 90) {
    grauConf = 1.645;
  } else if (opcaoRadio == 95) {
    grauConf = 1.96;
  } else {
    grauConf = 2.575;
  }

  let raiz = Math.sqrt(tamAmostra);
  let erro = (grauConf * desvPad) / raiz;

  let arredondar = parseFloat(erro.toFixed(2)); // para aproximar o número

  let intervaloMenos = media - arredondar;
  let intervaloMais = media + arredondar;

  let arredondarmenos = parseFloat(intervaloMenos.toFixed(2));
  let arredondarmais = parseFloat(intervaloMais.toFixed(2));
  let arredondarerro = parseFloat(erro.toFixed(2));

  document.getElementById("resultado").innerHTML =
    "<h2>Intervalo de confiança: </h2> <h3>" +
    arredondarmenos +
    " < μ < " +
    arredondarmais +
    "</h3>";

    document.getElementById("erro-td").innerHTML =
     arredondarerro
   
}

function insertRadio(value) {
  document.getElementById("grauConf-td").innerText =
  value;
}

  document.querySelector("#media-input").oninput = () => {
    document.querySelector("#media-td").innerText = document
      .querySelector("#media-input")
      .value.toUpperCase();
  };
  
  document.querySelector("#desvPad-input").oninput = () => {
    document.querySelector("#desvPad-td").innerText = document
      .querySelector("#desvPad-input")
      .value.toUpperCase();
  };
  
  document.querySelector("#tamAmostra-input").oninput = () => {
    document.querySelector("#tamAmostra-td").innerText = document
      .querySelector("#tamAmostra-input")
      .value.toUpperCase();
  };
  