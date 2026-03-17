function dividirLucro(lucroTotal, quantidadeSocios = 3) {
    if (quantidadeSocios <= 0) {
        throw new Error("A quantidade de sócios deve ser maior que zero.");
    }

    const valorPorSocio = lucroTotal / quantidadeSocios;

    return {
        lucroTotal: lucroTotal,
        quantidadeSocios: quantidadeSocios,
        valorPorSocio: valorPorSocio
    };
}

function calcular() {
    const lucroInput = document.getElementById("lucroTotal");
    const sociosInput = document.getElementById("quantidadeSocios");
    const lucroTotal = parseFloat(lucroInput.value);
    const quantidadeSocios = parseInt(sociosInput.value, 10);

    if (isNaN(lucroTotal) || lucroTotal < 0) {
        document.getElementById("resultado").innerHTML = "<p class='erro'>Informe um lucro válido.</p>";
        return;
    }
    if (isNaN(quantidadeSocios) || quantidadeSocios <= 0) {
        document.getElementById("resultado").innerHTML = "<p class='erro'>Informe uma quantidade de sócios válida (maior que zero).</p>";
        return;
    }

    const resultado = dividirLucro(lucroTotal, quantidadeSocios);

    document.getElementById("resultado").innerHTML = `
        <p><strong>Lucro total:</strong> R$ ${resultado.lucroTotal.toFixed(2)}</p>
        <p><strong>Quantidade de sócios:</strong> ${resultado.quantidadeSocios}</p>
        <p><strong>Valor por sócio:</strong> R$ ${resultado.valorPorSocio.toFixed(2)}</p>
    `;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = dividirLucro;
}
