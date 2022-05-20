function estacao() { 
    let mes = prompt('Digite o mês em extenso (ex: Setembro)')
    let saida = document.querySelector('section#saida')
    let estacao
    switch (mes.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estacao = 'INVERNO'
            break // Nunca se esqueça do break!!!
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.</p>`
}

// Sugestão de melhoria: refaça esse programa para que ele aceite tanto o mês por extenso quanto o número do mês.