let outputDiv = document.getElementById("output");
outputDiv.innerHTML += `<p> le bouton a été cliquer</>`

let button = document.getElementById("mybutton"); 
button.addEventListener("click", () => {
    i **= 2
    outputDiv.innerHTML = `<p>Le bouton a été cliqué ${i} fois!</p>`;
}); 

let i = 2