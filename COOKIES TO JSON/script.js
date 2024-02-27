function convertirCookies() {
    var cookiesNetscape = document.getElementById("cookie").value.trim();
    var cookiesArray = cookiesNetscape.split('\n');

    var cookiesJson = [];
    cookiesArray.forEach(function (cookie) {
        var cookieParts = cookie.split('\t');
        var cookieObject = {
            "domain": cookieParts[0],
            "path": cookieParts[2],
            "name": cookieParts[5],
            "value": cookieParts[6]
        };
        cookiesJson.push(cookieObject);
    });

    var resultadoJson = JSON.stringify(cookiesJson, null, 4);
    document.getElementById("result").value = resultadoJson;
}

function changeMode() {
    var cuerpo = document.body;
    var boton = document.getElementById("modo-btn");
    var textoActual = boton.textContent.trim();

    if (textoActual === "Modo Oscuro") {
        cuerpo.classList.remove("modo-noche");
        cuerpo.classList.add("modo-claro");
        boton.textContent = "Modo Claro";
    } else {
        cuerpo.classList.remove("modo-claro");
        cuerpo.classList.add("modo-noche");
        boton.textContent = "Modo Oscuro";
    }
}

function copyResultToClipboard() {
    var resultTextArea = document.getElementById("result");
    resultTextArea.select();
    document.execCommand("copy");
    alert("¡El resultado se ha copiado al portapapeles!");
}