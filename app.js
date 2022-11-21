let operande = 10;

let elementUn = document.getElementById("entier");
let elementDeux = document.getElementById("flottant");
let elementTrois = document.getElementById("non-numerique");
let elementQuatre = document.getElementById("random");
let elementCinq = document.getElementById("trunc");
let elementSix = document.getElementById("replace");

//1
entier.innerHTML = operande * parseInt(entier.innerHTML);

//2
flottant.innerHTML = operande * parseFloat(flottant.innerHTML);
elementDeux.innerHTML = parseInt(elementUn.innerHTML) + parseFloat(elementDeux.innerHTML);

//3
let result = parseInt(elementTrois);
if(isNaN(elementTrois)){
    elementTrois.innerHTML = '0';
}

//4
/*
for(let i = 0; i < 5;i++){
    elementQuatre.innerHTML = Math.random();
    console.log(nombrealeatoire);
}*/
//5
let truncX = 54.988;
elementCinq.innerText = Math.trunc(truncX);



//6

elementSix.innerText = elementSix.innerText.replace('world', 'Bail victorien')
console.log(elementSix);



