const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    Const pessoasConectas = (dados.total_pessoas_conectadas / 1e9)
    Const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    Const horas = parseInt(dados.tempo_medio)
    Const minutos = Math.round(dados.tempo_medio -  horas) * 100
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    
    paragrafo.innerHTML = `O mundo tem aproximadamente <span>${dados.total_pessoas_mundo}</span> de pessoas e das quais <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${horas}</span> horas e <span>${minutos}</span> conectadas.`
    

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()