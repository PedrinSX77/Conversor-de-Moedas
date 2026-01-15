const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
let taxas = {};

async function searchValues() {
    try {
        const resposta = await fetch(url);
        /* Transforma tudo em Objetos */
        const dados = await resposta.json();
        taxas = dados
        return taxas
    } catch (error) {
        console.error("Erro ao buscar dados externos")
    }
}
searchValues();

function atualizarConversao() {
    const valueNumber = Number(inputType.value);
    const selectedCoin = inCashType.value;
    const conversorCoin = outCashType.value;

    if (!inputType.value) {
        outputType.value = "";
        return;
    }

    if (conversorCoin === selectedCoin) {
        outputType.value = valueNumber.toFixed(2);
    } else if (conversorCoin !== "BRL" && selectedCoin !== "BRL") {
        const valorSelected = parseFloat(taxas[selectedCoin + "BRL"].bid);
        const valorConversor = parseFloat(taxas[conversorCoin + "BRL"].bid);

        const resultado = (valueNumber * valorSelected) / valorConversor;
        outputType.value = resultado.toFixed(2);
    }
    else if (conversorCoin !== "BRL") {
        const key = conversorCoin + "BRL";
        const cotacao = parseFloat(taxas[key].bid);

        outputType.value = (valueNumber / cotacao).toFixed(2)
    } else if (conversorCoin === "BRL") {
        const key = selectedCoin + conversorCoin;
        const cotacao = parseFloat(taxas[key].bid);

        outputType.value = (valueNumber * cotacao).toFixed(2)
    }
}
atualizarConversao()

inputType.addEventListener('input', atualizarConversao);
inCashType.addEventListener('change', atualizarConversao); 
outCashType.addEventListener('change', atualizarConversao);