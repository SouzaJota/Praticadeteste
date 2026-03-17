function calcularVelocidadeMedia(distanciaKm, tempo, unidadeTempo = "h") {
    if (typeof distanciaKm !== 'number' || isNaN(distanciaKm) || distanciaKm < 0) {
        throw new Error("Distância inválida.");
    }
    if (typeof tempo !== 'number' || isNaN(tempo) || tempo <= 0) {
        throw new Error("Tempo inválido.");
    }

    let tempoHoras;
    if (unidadeTempo === "min") {
        tempoHoras = tempo / 60;
    } else {
        tempoHoras = tempo;
    }

    const velocidadeMedia = parseFloat((distanciaKm / tempoHoras).toFixed(2));

    return {
        distanciaKm: distanciaKm,
        tempoHoras: parseFloat(tempoHoras.toFixed(2)),
        velocidadeMedia: velocidadeMedia
    };
}

function calcular() {
    const distanciaKm = parseFloat(document.getElementById('distanciaKm').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    const unidadeTempo = document.getElementById('unidadeTempo').value;

    if (isNaN(distanciaKm) || distanciaKm < 0 || isNaN(tempo) || tempo <= 0) {
        document.getElementById('resultado').innerHTML = '<p class="erro">Informe distância e tempo válidos.</p>';
        return;
    }

    const resultado = calcularVelocidadeMedia(distanciaKm, tempo, unidadeTempo);
    document.getElementById('resultado').innerHTML = `
        <p><strong>Distância:</strong> ${resultado.distanciaKm} km</p>
        <p><strong>Tempo:</strong> ${resultado.tempoHoras} h</p>
        <p><strong>Velocidade média:</strong> ${resultado.velocidadeMedia} km/h</p>
    `;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calcularVelocidadeMedia;
}
