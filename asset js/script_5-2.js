//var input
let Inputnombre = document.querySelector("#nombre");
//var btn
let btn_check = document.querySelector("#btn_check");
//result inner
let result = document.querySelector("#result");

let VerifNombre = (nbr) => {
  while (nbr <= 10 || nbr >= 20) {
    if (nbr < 10) {
      result.textContent = "less";
    } else {
      result.textContent = "more";
    }
  }
  return (result.textContent = "Bravo , c'est un nombre entre 10 et 20");
};

btn_check.addEventListener("click", () => {
  VerifNombre(Inputnombre.value);
});
