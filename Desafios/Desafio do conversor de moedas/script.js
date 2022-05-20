let resTag = document.getElementById("result")
function leapYear(){
    let year = window.prompt("Qual é o ano que você quer verificar?")

    if(isNaN(year)|| year == '' || year < 0){
       alert("Digite um ano válido") 
       return
    }

    if((year%400 == 0) || (year%4==0 && year%100!=0)){
        resTag.innerHTML = `<p> O ano ${year} <span style="color: green; background: #b2ffb2"><strong>É BISSEXTO <strong></span> &#9989`
    }else{
        resTag.innerHTML = `<p> O ano ${year} <span style="color: red; background: #f9a19a"><strong>NÃO É BISSEXTO<strong></span> &#10060`
    }

}