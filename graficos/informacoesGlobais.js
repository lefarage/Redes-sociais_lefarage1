const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9). toFixed(3)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(3)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    
    paragrafo.innerHTML = `O mundo tem aproximadamente <span>${dados.total_pessoas_mundo}</span> bilhões de pessoas e das quais <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${horas}</span> horas e <span>${minutos}</span> conectadas.`
    

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()