let outputDiv = document.getElementById("output");
let button = document.getElementById("mybutton");
let i = 0 
let lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 

button.addEventListener("click", () => 
{
    if (i < lettres.length) {
    outputDiv.innerHTML += `<p>${lettres[i]}</p>`;
    i++;
}

    else {
        outputDiv.innerHTML = "";
        i = 0 
    }
}
); 
