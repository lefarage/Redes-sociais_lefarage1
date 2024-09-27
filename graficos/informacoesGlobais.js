const url = https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json
console.log(url);
async function visualizarinformacoesGlobais() {
    const res = await fetch(url)
}