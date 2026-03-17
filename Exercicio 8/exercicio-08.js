function calcularAreaTerreno(largura, comprimento, valorMetroQuadrado) {
    const area = largura * comprimento;
    const resultado = {
        largura: largura,
        comprimento: comprimento,
        area: area
    };

    if (typeof valorMetroQuadrado === 'number' && !isNaN(valorMetroQuadrado)) {
        resultado.valorMetroQuadrado = valorMetroQuadrado;
        resultado.valorTerreno = area * valorMetroQuadrado;
    }

    return resultado;
}

function calcular() {
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const valorM2 = parseFloat(document.getElementById('valorMetroQuadrado').value);

    if (isNaN(largura) || largura <= 0 || isNaN(comprimento) || comprimento <= 0) {
        document.getElementById('resultado').innerHTML = '<p class="erro">Informe largura e comprimento válidos maiores que zero.</p>';
        return;
    }

    const resultado = calcularAreaTerreno(largura, comprimento, isNaN(valorM2) ? undefined : valorM2);

    let html = `
        <p><strong>Largura:</strong> ${resultado.largura} m</p>
        <p><strong>Comprimento:</strong> ${resultado.comprimento} m</p>
        <p><strong>Área:</strong> ${resultado.area} m²</p>
    `;

    if (resultado.valorTerreno !== undefined) {
        html += `<p><strong>Valor por m²:</strong> R$ ${resultado.valorMetroQuadrado.toFixed(2)}</p>
                 <p><strong>Preço estimado:</strong> R$ ${resultado.valorTerreno.toFixed(2)}</p>`;
    }

    document.getElementById('resultado').innerHTML = html;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calcularAreaTerreno;
}
