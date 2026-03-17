function converterTemperatura(valor, sentido = "CtoF") {
    if (typeof valor !== 'number' || isNaN(valor)) {
        throw new Error("Valor de temperatura inválido.");
    }
    let celsius = null;
    let fahrenheit = null;

    if (sentido === "CtoF") {
        celsius = valor;
        fahrenheit = parseFloat(((valor * 9/5) + 32).toFixed(2));
    } else if (sentido === "FtoC") {
        fahrenheit = valor;
        celsius = parseFloat(((valor - 32) * 5/9).toFixed(2));
    } else {
        throw new Error("Sentido inválido. Use CtoF ou FtoC.");
    }

    return { celsius, fahrenheit };
}

function calcular() {
    const valor = parseFloat(document.getElementById('temperatura').value);
    const sentido = document.getElementById('sentido').value;

    if (isNaN(valor)) {
        document.getElementById('resultado').innerHTML = '<p class="erro">Informe uma temperatura válida.</p>';
        return;
    }

    const resultado = converterTemperatura(valor, sentido);
    document.getElementById('resultado').innerHTML = `
        <p><strong>Celsius:</strong> ${resultado.celsius} °C</p>
        <p><strong>Fahrenheit:</strong> ${resultado.fahrenheit} °F</p>
    `;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = converterTemperatura;
}
