
function welcome(){
    let name = window.prompt("Qual é o seu nome?")
    let age = Number(window.prompt("Olá " +name+ "! Quantos anos você tem?"))

    alert(`Acabei de conhecer o ${name} que tem ${age} de idade`)
}