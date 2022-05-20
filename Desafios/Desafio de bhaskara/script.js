let resTag = document.getElementById("result");

function bhaskara() {
    let a = window.prompt("Qual é o valor de a?");
    let b = window.prompt("Qual é o valor de b?");
    let c = window.prompt("Qual é o valor de c?");

    if(verifyInput(a) || verifyInput(b) || verifyInput(c)){
        alert("Error. Digite um ano válido");
        return
    }    
    let delta = calDelta(a,b,c)

    resTag.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    resTag.innerHTML += `<p> Equação atual é <strong> ${a}x² + ${b}x + ${c} = 0 </strong> </p>`
    resTag.innerHTML += `<p> O calculo realizado será <strong> ▵ = ${b}² - 4 . ${a} . ${c} </strong>`
    resTag.innerHTML += `<p> O valor calculado foi <strong>▵ =  ${delta}</strong>`

}

function verifyInput(number) {
    if (isNaN(number) || number == "" || number < 0) {
        return true;
    }
    return false
}

function calDelta(a,b,c){
    let delta = Math.pow(b, 2) - (4 * a * c ) 
    return delta 
}