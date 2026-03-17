function calcularTempoProducao(quantidadePecas, maquinas = 1) {
    if (quantidadePecas < 0 || maquinas <= 0) {
        throw new Error("Quantidade de peças deve ser >=0 e máquinas > 0.");
    }

    const producaoPorHoraPorMaquina = 15;
    const producaoPorHoraTotal = producaoPorHoraPorMaquina * maquinas;
    const horasNecessarias = parseFloat((quantidadePecas / producaoPorHoraTotal).toFixed(2));

    return {
        quantidadePecas: quantidadePecas,
        maquinas: maquinas,
        producaoPorHoraPorMaquina: producaoPorHoraPorMaquina,
        producaoPorHoraTotal: producaoPorHoraTotal,
        horasNecessarias: horasNecessarias
    };
}

function calcular() {
    const quantidadePecas = parseFloat(document.getElementById("quantidadePecas").value);
    const maquinas = parseInt(document.getElementById("maquinas").value, 10);



    const resultado = calcularTempoProducao(quantidadePecas, maquinas);
    document.getElementById("resultado").innerHTML = `
        <p><strong>Peças solicitadas:</strong> ${resultado.quantidadePecas}</p>
        <p><strong>Máquinas:</strong> ${resultado.maquinas}</p>
        <p><strong>Produção por hora total:</strong> ${resultado.producaoPorHoraTotal} peças/h</p>
        <p><strong>Horas necessárias:</strong> ${resultado.horasNecessarias.toFixed(2)} h</p>
    `;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calcularTempoProducao;
}
