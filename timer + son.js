let temps = 0; //défini le temps a 0 
let intervalID = null; 

const timerElement = document.getElementById("timer"); //récup "timer" dans le html 
const StartButton = document.getElementById("StartButton");
const StopButton = document.getElementById("StopButton");
const ResetButton = document.getElementById("ResetButton");
const sound = document.getElementById("sound");
function updateTimerDisplay(){
  let minutes = parseInt(temps / 60, 10); // temps / 60 convertie en 60 seconde donc une minute, parseint avec 10 a la fin garde la partie entière 
  let secondes = parseInt(temps % 60, 10); // % (modulo) donne le reste de la division, temps % 60 donne le temps qu'on peux pas mettre dans une minute entière 

    // si temps = 142, alors 
    // 142 / 60 = 2.366 avec parseint sa tranforme 2.366 en 2 donc sa affichera 2 minute 
    // 142 % 60 = 22 donc 22 seconde affiché 

  minutes = minutes < 10 ? "0" + minutes : minutes; // si c'est en dessous de 10 sa rajoute un 0 devant : 9 devient 09 
  secondes = secondes < 10 ? "0" + secondes : secondes; // pareil que dessus

  timerElement.innerText = `${minutes}:${secondes}`; // met a jours le texte dans le html et affiche minute + seconde 
}

function startTimer () {
    if (!intervalID) {  // vérifie que le timer est pas déjà lancer, ! = non 
        intervalID = setInterval(() => {  // fais que sa s'exécute tout les x seconde 
            temps = temps + 1; // ajoute 1 sec au temps 
            updateTimerDisplay(); // met a jours l'affichage du timer 
            if (temps === 5){
                sound.play();
            }
            if (temps === 20){
                sound.pause();
                sound.currentTime = 0; 
            }
        }, 1000); //fais que setinterval s'éxecute toute les seconde 
    }
}

function stopTimer() {
    if (intervalID) { // regarde si le chrono est lancer 
        clearInterval(intervalID); // arrête setinterval 
        intervalID = null; // remet intervalID par défaut donc arrêter 
    }
}

function resetTimer () {
    stopTimer(); // fais le taff de la fonction stopTimer 
    temps = 0; // remet le temps a 0 
    updateTimerDisplay(); // met a jours l'affichage du timer 
}

StartButton.addEventListener("click", startTimer); // fais une actions quand on clic sur le bouton 
StopButton.addEventListener("click", stopTimer); // fais une actions quand on clic sur le bouton 
ResetButton.addEventListener("click", resetTimer); // fais une actions quand on clic sur le bouton 

updateTimerDisplay(); // met a jours l'affichage du timer 

