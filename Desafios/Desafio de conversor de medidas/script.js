let resTag = document.getElementById("result");

function measurements() {
    let meters = window.prompt("Digite uma distância em metros (m)");
    if(verifyInput(meters)){
        alert("Error. Digite um ano válido");
        return
    }    
    const dado = {
        km: kilometers(meters),
        hm: hectometers(meters),
        deca: decameters(meters),
        dm: decimeters(meters),
        cm: centimeters(meters),
        mm: millimeter(meters)
    }
    resTag.innerHTML = `<h2>A distância de ${meters} metros, corresponde a...</h2>`
    resTag.innerHTML += `<p> ${dado.km} quilômetros (Km) </p>`
    resTag.innerHTML += `<p> ${dado.hm} hectômetros (Hm) </p>`
    resTag.innerHTML += `<p> ${dado.deca} decâmetros (Dam) </p>`
    resTag.innerHTML += `<p> ${dado.dm} decímetros (Dm) </p>`
    resTag.innerHTML += `<p> ${dado.cm} centímetros (Cm) </p>`
    resTag.innerHTML += `<p> ${dado.mm} milímetros (Mm) </p>`
}

// Conversão de Metros em kilometros
const kilometers = m => m/1000
// Conversão de Metros em hectometros
const hectometers = m => m/100
// Conversão de Metros em decametros
const decameters = m => m/10
// Conversão de Metros em decimetros
const decimeters = m => m * 10
// Conversão de Metros em centimetros
const centimeters = m => m * 100
// Conversão de Metros em milimetros
const millimeter = m => m * 1000

function verifyInput(number) {
    if (isNaN(number) || number == "" || number < 0) {
        return true;
    }
    return false
}