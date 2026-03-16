function calcularConsumo(distanciaKm, combustivelLitros, combustivelEstimado) {

    const consumoMedio = distanciaKm / combustivelLitros;

    const resultado = {
        distanciaKm: distanciaKm,
        combustivelLitros: combustivelLitros,
        consumoMedio: consumoMedio
    };

    if (combustivelEstimado !== undefined) {
        resultado.autonomiaEstimada = consumoMedio * combustivelEstimado;
    }

    return resultado;
}

function calcular() {
    const distancia = parseFloat(document.getElementById("distancia").value);
    const combustivel = parseFloat(document.getElementById("combustivel").value);
    const estimado = parseFloat(document.getElementById("estimado").value);

    const resultado = calcularConsumo(distancia, combustivel, estimado);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p><strong>Distância:</strong> ${resultado.distanciaKm} km</p>
        <p><strong>Consumo médio:</strong> ${resultado.consumoMedio.toFixed(2)} km/l</p>
        ${resultado.autonomiaEstimada !== undefined ? `<p><strong>Autonomia estimada:</strong> ${resultado.autonomiaEstimada.toFixed(2)} km</p>` : ''}
    `;
}

module.exports = calcularConsumo;