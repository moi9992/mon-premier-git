let outputDiv = document.getElementById("output");
let button = document.getElementById("mybutton");
let sujet = ["Je ", "Un dromadaire fluorescent ", "Une bassine de yaourt ", "Le lama de l’espace ",];
let verbe = ["catapulte ", "épluche ", "gifle ", "grimpe ", "récite "];
let objet1 = ["Un boudin ", "Une Game Boy ", "Un sandwich SNCF ", "Michel Drucker ", "du Molière "];
let objet2 = ["girafe empaillée ", "Patrick Sébastien ", "toboggan suisse ", "une poubelle connectée "];
let verbe2 = ["maquille ", "fuit ", "téléporte ", "sabre ", "jongle "];
let personnage = ["Jean-Michel Jarre ", "à reculons ", "Nabilla ", "je ", "Gérard Depardieu "];
let lieu = ["dans une cave à fromages ", "à Bratislava ", "dans un jacuzzi spatial ", "dans une montgolfière rose "];
let action = ["avec des huîtres radioactives", "avec des bottes en caramel", "en hurlant Libérez les mouettes !", "en chantant l’hymne bulgare avec un kazoo dans chaque narine", "en jonglant avec des pneus en feu"];
let i = 0;
button.addEventListener("click",() =>{
    switch(i){
        case 0:
        sujets = sujet[Math.floor(Math.random() *sujet.length)];
        outputDiv.innerHTML = sujets;
        i = 1;
        break;
        case 1:
        verbes = verbe[Math.floor(Math.random() *verbe.length)];
        outputDiv.innerHTML = sujets + verbes;
        i = 2;
        break; 
        case 2:
        objets1 = objet1[[Math.floor(Math.random() *objet1.length)]];
        outputDiv.innerHTML = sujets + verbes + objets1;
        i = 3;
        break;
        case 3:
        objets2 = objet2[Math.floor(Math.random() *objet2.length)];
        outputDiv.innerHTML = sujets + verbes + objets1 + objets2;
        i = 4;
        break;
        case 4:
        verbes2 = verbe2[Math.floor(Math.random() *verbe2.length)];
        outputDiv.innerHTML = sujets + verbes + objets1 + objets2 + verbes2;
        i = 5;
        break;
        case 5: 
        personnages = personnage[Math.floor(Math.random() *personnage.length)];
        outputDiv.innerHTML = sujets + verbes + objets1 + objets2 + verbes2 + personnages; 
        i = 6;
        break;
        case 6:
        lieux = lieu[Math.floor(Math.random() *lieu.length)];
        outputDiv.innerHTML = sujets + verbes + objets1 + objets2 + verbes2 + personnages + lieux;
        i = 7;
        break;
        case 7:
        actions = action[Math.floor(Math.random() *action.length)];
        outputDiv.innerHTML = sujets + verbes + objets1 + objets2 + verbes2 + personnages + lieux + actions;
        i = 0;
        break; 
    }
})
// [Sujet] [verbe] un [objet1] sur un [objet2], puis [verbe2] [personnage] [lieu] [action]