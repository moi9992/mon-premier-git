// ---1. Déclarer une variable ---
let nom = "amer"; //Déclare une variable modifiable (let)
let prenom = "Nix"; //Autre chaine de caractère 
let age = 25; //Déclare une variable de type nombre entier 
let isStudent = true; //Déclare une variable booléenne (true/false)
let prix = 19.99; // déclare un e variable de type nombre décimal 
let uninitialized; //undefined par défaut (variable déclarée mais non initié)
let emptyObject = null; //Objet vide explicite

//difference entre variable var let et const

function exemple() {
    var a = 1;
    let b = 2;
    const c = 3;
    let d = 4;

    if (true) {
        var a = 10; //Redéclare et écrase
        let b = 20; //Nouvelle variable locale au bloc
        c = 30; // Erreur : on ne peux pas réassigner une const 
        console.log(a, b, c); // 10, 20, 3
    }

    console.log(a); // 10 (modifié à l'intérieur)
    console.log(b); // 2 (valeur initiale)
    console.log(c); // 3 (constante)
}

// ---2. Affichage de texte ---
let outputDiv = document.getElementById("output"); //récupère l'élément HTML avec l'ID "output"
outputDiv.innerHTML += `<p>Bonjours, je m'appelle ${prenom} ${nom} et j'ai ${age + 5} ans.</p>`;

// // ---3. Les constantes ---
const PI = 3.14159; // Déclare une constante (valeur imuable)
const SITE_NAME = "MonSite"; // autre constante 
outputDiv.innerHTML += `<p>La valeur de PI est : ${PI}</p>` ;
outputDiv.innerHTML += `<p>Bienvenu sur ${SITE_NAME}</p>` ;

// // ---4. Les conditions ---
if (age >= 18) //Vérifie sir la personne est majeur
{
    outputDiv.innerHTML += `<p>Vous êtes majeur.</p>`;
}
else 
{
    outputDiv.innerHTML += `<p>Vous êtes mineur.</p>`;
}

// // ---5. Les boucles ---
for (let i = 1; i <= 5; i++) // boucle for qui affiche 5 itération
{
    outputDiv.innerHTML += `<p>Itération: ${i}</p>`;
}

// // ---6. Les tableaux ---
let fruits = ["Pomme", "Banane", "Orange"]; // Déclare un tableau 
outputDiv.innerHTML += `<p>Deuxième fruit: ${fruits[1]}</p>`; // Affiche le deuxième élément du tableau

// Parcours du tableau avec forEach
fruits.forEach(fruit => 
{
    outputDiv.innerHTML += `<p>${fruit}</p>`;
}
);
for (let i = 0; i < fruits.length; i++)
{
    outputDiv.innerHTML += `<p>Fruit ${i + 1}: ${fruits[i]}</p>`;
} //pareil que au dessus mais en + chiant 

// Les tableaux associatifs (objets en JS)
let prixfruits =  //déclare un objet
{
    "Pomme": 1.20,
    "Banane": 0.80,
    "Orange": 1.00
};
outputDiv.innerHTML += `<p>${prixfruits.Orange}</p>`;

// Parcours de l'objet avec une boucle for...in
for (let fruit in prixfruits)
{
    outputDiv.innerHTML += `<p>Le prix de ${fruit} est de ${prixfruits[fruit]} €</p>`;
}

// ---7. Les fonctions ---
function sayHello(name) // Déclare une fonction qui retourne
{
    return `Bonjour, ${name}!`;
}

// ---8. Les opérateurs de comparaison ---
let testAge = 25;
if (testAge === 25) // strictement égal à 25 (même type et même condition)
{
    outputDiv.innerHTML += `<p>Vous avez exactement 25ans.</p>`;
}
if (testAge !== 30) //strictement différent de 30
{
    outputDiv.innerHTML += `<p>Vous n'avez pas 30ans.</p>`;
}

// ---9. Les opérateur logiques ---
let isAdult = age >= 18;
let isSenior = age > 60;
if (isAdult && !isSenior) // Si la personne est adulte mais pas senior 
{
    outputDiv.innerHTML += `<p>Vous êtes un adulte mais pas un senior.</p>`;
}

// ---10. Manipulation d'objets --- 
let personne = { nom: "Amer", age: 25}; //création d'un objet
personne.age = 26; //Modification de la valeur de la propriété
personne.email = "amernix@exemple.com"; // Ajout d'une nouvelle propriété
outputDiv.innerHTML += `<p>Nom: ${personne.nom}, Age: ${personne.age}, Email: ${personne.email}</p>`;

// ---11. Les événements ---
let button = document.getElementById("myButton"); //récuperer le bouton 
button.addEventListener("click", () => { //Ajoute un event au click
    outputDiv.innerHTML += `<p>Le bouton a été cliqué !</p>` ;
}); 

// ---12. Les chaînes de caractéres ---
let greeting = "Bonjours, " + prenom + " " + nom;  // concaténation de chaîne
outputDiv.innerHTML += `<p>${greeting}</p>`; // affichage du message de salutation 

