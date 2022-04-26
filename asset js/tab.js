// les tabelaux
//déclaration simple
let tab = ["texte", 15, "yannick", "github"];
// ajouter une valeur en fin de tableau , push
tab.push("nouvelle valeur");

//modifier une valeur dans mon tableau (ex: case n°2)
//! tab[indice] = valeur
tab[1] = 30; // la num commence à 0 , donc ce sera 15
//supprimer une case de mon tab
//!tab.splice(index,nombre de valeur à partir de la valeur )
tab.splice(3, 1);
