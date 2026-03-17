function converterMoeda(valorUSD, cotacao) {
    const valorBRL = valorUSD * cotacao;

    return {
        valorUSD: valorUSD,
        cotacao: cotacao,
        valorBRL: valorBRL
    };
}

function converter() {
    const usdInput = document.getElementById("usd");
    const cotacaoInput = document.getElementById("cotacao");
    const resultadoEl = document.getElementById("resultado");

    const usd = Number(usdInput.value);
    const cotacao = Number(cotacaoInput.value);

    if (!usd || !cotacao) {
        resultadoEl.textContent = "Digite valores válidos.";
        return;
    }

    const resultado = converterMoeda(usd, cotacao);
    resultadoEl.textContent = `${resultado.valorUSD.toFixed(2)} USD = R$ ${resultado.valorBRL.toFixed(2)}`;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = converterMoeda;
}