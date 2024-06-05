const llamarFrase = document.getElementById("button");


function fraseRandom (){ 
        arrFrase = ["La nueva era", "Era paleozoica", "Era mesozoica", "Es hora de crear una nueva era","Era popular", "Era industrial", "Era medieval", "Era antartica", "Era tecnologica", "Era espacial"];
        let i = Math.floor(Math.random()*10);
        return arrFrase[i];
};

function ashe() {
    document.getElementById("frase").innerHTML = `La frase del dia es: ${fraseRandom()}`;
};

llamarFrase.addEventListener("click", ashe);