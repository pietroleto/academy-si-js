//sposto l'utente nella pagina di login
function redirectToLogin() {
    if (window.location.pathname != "/index.html") { //evito il loop
        window.location.href = "/index.html";
    }
}

//sposto l'utente nella dashboard principale
function redirectToDashboard() {
    if (window.location.pathname != "/dashboard.html") { //evito il loop
        window.location.href = "/dashboard.html";
    }
}

var data = JSON.parse(localStorage.getItem('data'));

if (data === null) { //accesso non effettuato
    redirectToLogin();
} else {
    if (window.location.pathname == "/index.html") {
        redirectToDashboard();
    }
}

//verifico se il token è scaduto
var ttl = new Date(data.ttl); //prelevo il ttl (Time To Live)
var now = new Date(); //lo confronto con la data e l'ora corrente

if (ttl < now) { //token scaduto
    localStorage.removeItem('data');
    redirectToLogin();
}