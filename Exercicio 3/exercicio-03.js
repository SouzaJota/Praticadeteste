function calcularImposto(preco) {
  let percentual;

  if (preco <= 50) {
    percentual = 0.05;
  } else if (preco <= 100) {
    percentual = 0.08;
  } else if (preco <= 500) {
    percentual = 0.12;
  } else if (preco <= 1000) {
    percentual = 0.15;
  } else {
    percentual = 0.18;
  }

  const valorImposto = preco * percentual;
  const precoFinal = preco + valorImposto;

  return {
    precoOriginal: preco,
    percentualImposto: percentual,
    valorImposto: valorImposto,
    precoFinal: precoFinal,
  };
}

function calcular() {
  const valorInput = document.getElementById("preco").value;
  const preco = Number(valorInput);
  const resultado = document.getElementById("resultado");

  if (!valorInput || Number.isNaN(preco) || preco <= 0) {
    resultado.innerText = "Digite um preço válido maior que 0.";
    return;
  }

  const dados = calcularImposto(preco);
  const percentual = (dados.percentualImposto * 100).toFixed(0);

  resultado.innerHTML = `
    <p>Preço original: R$ ${dados.precoOriginal.toFixed(2)}</p>
    <p>Percentual de imposto: ${percentual}%</p>
    <p>Valor do imposto: R$ ${dados.valorImposto.toFixed(2)}</p>
    <p><strong>Preço final com imposto: R$ ${dados.precoFinal.toFixed(2)}</strong></p>
  `;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = calcularImposto;
}
