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
    var body = document.body;
    var boton = document.getElementById("modo-btn");
    var textoActual = boton.textContent.trim();

    if (body.classList.contains("night-mode")) {
        boton.textContent = "Light";
        setTimeout(function () {
            body.classList.remove("night-mode");
            body.classList.add("light-mode");
        }, 10);
    } else {
        boton.textContent = "Dark";
        setTimeout(function () {
            body.classList.remove("light-mode");
            body.classList.add("night-mode");
        }, 10);
    }
}

function copyResultToClipboard() {
    var resultTextArea = document.getElementById("result");
    resultTextArea.select();
    document.execCommand("copy");
    alert("¡El resultado se ha copiado al portapapeles!");
}