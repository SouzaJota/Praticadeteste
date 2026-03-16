function calcularVendaComFrete(valorProdutos) {
    let frete = 20.00;

    if (valorProdutos > 200) {
        frete = 0;
    }

    return {
        valorProdutos: valorProdutos,
        frete: frete,
        valorTotal: valorProdutos + frete
    };
}

function realizarCalculo() {
    const input = document.getElementById('valorProdutos');
    const valor = Number(input.value);

    const resultado = calcularVendaComFrete(valor);


    document.getElementById('resultado').innerHTML = `
        Total: R$ ${resultado.valorTotal.toFixed(2)}
    `;
}

if (typeof module !== 'undefined') {
    module.exports = calcularVendaComFrete;
}