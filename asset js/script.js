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
