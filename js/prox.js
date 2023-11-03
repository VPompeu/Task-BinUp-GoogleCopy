var texto = localStorage.getItem('texto');
        if (texto) {
            document.getElementById("textoEnviado").textContent = texto;
        } else {
            document.getElementById("textoEnviado").textContent = "Nenhum texto enviado.";
        }