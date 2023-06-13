document.getElementById("btnSubmit").onclick = function () {
    let radios = document.getElementsByName("opcoes");
    let opcaoRadio;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        opcaoRadio = radios[i].value;
        intConfProp(opcaoRadio);
      }
    }
  };
  
  let grauConf;

  function intConfProp(opcaoRadio) {
    
    let valordeP = Number(document.getElementById("valordeP").value);
    let tamAmostra = Number(document.getElementById("tamAmostra").value);
    grauConf;
  
    if (opcaoRadio == 90) {
      grauConf = 1.645;
    } else if (opcaoRadio == 95) {
      grauConf = 1.96;
    } else {
      grauConf = 2.575;
    }
  
    let erroparte1 = (valordeP * (1- valordeP)) / tamAmostra;
    let raiz = Math.sqrt(erroparte1);
    let erro = grauConf * raiz;
    let arredondar = parseFloat(erro.toFixed(2)); // para aproximar o número
  
    let intervaloMenos = valordeP - arredondar;
    let intervaloMais = valordeP + arredondar;

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

  /* Função para calcular o valor de P dentro do modal*/
  
  function calcularP() {
    
    let numSucesso = Number(document.getElementById("numSucesso").value);
    let tamAmostraP = Number(document.getElementById("tamAmostraP").value);

    let resultadoP = numSucesso/tamAmostraP;
    

    document.getElementById("resultadoP").innerHTML =
    "<h2>Valor de P: </h2> <h3>" +
    resultadoP +
    "</h3>";

    document.getElementById("valordeP").value = resultadoP;

    document.getElementById("valordeP-td").innerText =
    resultadoP;

  }

  function insertRadio(value) {
    document.getElementById("grauConf-td").innerText =
    value;
  }

  document.querySelector("#tamAmostra").oninput = () => {
    document.querySelector("#tamAmostra-td").innerText = document
      .querySelector("#tamAmostra")
      .value.toUpperCase();
  };

  document.querySelector("#valordeP").oninput = () => {
    document.querySelector("#valordeP-td").innerText = document
      .querySelector("#valordeP")
      .value.toUpperCase();
  };
