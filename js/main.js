/*Criado por: Victor Pompeu*/

function enviarTexto() {
    var texto = document.getElementById("textoParaEnviar").value;
    localStorage.setItem('texto', texto);
    window.location.href = "prox.html";
}
document.getElementById("textoParaEnviar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        enviarTexto();
    }
});