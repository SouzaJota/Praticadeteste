function calcularJurosCompostos(valorInicial, meses) {
    const taxa = 0.015;
    const valorFinal = valorInicial * Math.pow((1 + taxa), meses);
    const valorFinalArredondado = valorFinal.toFixed(2);
    const juros = (valorFinal - valorInicial).toFixed(2);

    return {
        valorInicial: valorInicial,
        meses: meses,
        valorFinal: parseFloat(valorFinalArredondado),
        juros: parseFloat(juros)
    };
}

function calcular() {
    const valorInicial = parseFloat(document.getElementById("valorInicial").value);
    const meses = parseInt(document.getElementById("meses").value);

    const resultado = calcularJurosCompostos(valorInicial, meses);

    document.getElementById("resultado").innerHTML = `
        <p><strong>Valor inicial:</strong> R$ ${resultado.valorInicial}</p>
        <p><strong>Tempo:</strong> ${resultado.meses} meses</p>
        <p><strong>Valor final:</strong> R$ ${resultado.valorFinal.toFixed(2)}</p>
        <p><strong>Total de juros:</strong> R$ ${resultado.juros.toFixed(2)}</p>
    `;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calcularJurosCompostos;
}