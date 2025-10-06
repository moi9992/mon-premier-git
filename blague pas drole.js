let outputDiv = document.getElementById("output");
let button = document.getElementById("mybutton");
let messageVisible = false

button.addEventListener("click", () => { 
    outputDiv.innerHTML += `<p>Bah la prochaine fois, au lieu d’avaler, tu croques.</p>` ;

if (messageVisible)
{
    outputDiv.innerHTML = `<p><h1>Bah la prochaine fois, au lieux d'avaler, tu croque !</h1></p>`
    messageVisible = false;
}

else {
    outputDiv.innerHTML = "";
    messageVisible = true;
}
}); 
