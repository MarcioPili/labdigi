function teste() {
    const num = Number(window.prompt('Digite um número: '))
    let tipo = ''
    if (num % 2 === 1) {
        tipo = '<strong>ÍMPAR</strong>'
    } else {
        tipo = '<strong>PAR</strong>'
    }

    let res = document.getElementById('result')
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`
}