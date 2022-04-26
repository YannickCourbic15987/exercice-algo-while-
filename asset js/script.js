// boucle qui affiche la table de multiplication de chiffre
const chiffre = 7;
const result = document.querySelector("#result");

//pour
for (let i = 1; i <= 10; i++) {
  result.innerHTML += "<br>" + chiffre + " x " + i + " = " + chiffre * i;
}

//while

result.innerHTML +=
  "<br>" + "===============================================================";
const chiffre1 = 8;

let j = 1;
result.innerHTML += "<br>" + " table de multiplication de " + chiffre1 + "<br>";
while (j <= 10) {
  j++;
  result.innerHTML += "<br>" + chiffre1 + " x " + j + " = " + chiffre1 * j;
}

// exercie 5.1

// //! variable input
// const nombre = document.querySelector("#nombre");

// //! btn

// let btn_number = document.querySelector("#btn_number");

// btn_number.addEventListener("click", () => {
//   while (nombre.value < 3 || nombre.value > 1) {

//   }
// });
let response = prompt('donne moi un chiffre compris entre 1 et 3');

while(response < 1 || response > 3){
    response = prompt('La valeur doit être comprise entre 0 et 3! Donne moi un chiffre compris entre 1 et 3');
}

document.querySelector('#result').textContent = "Merci, rappel de votre chiffre " + response;