function getUtenti() {
    return getRequest("http://localhost:8080/api/user/get-all");
}

function getCorsi() {
    return getRequest("http://localhost:8080/api/corso/corsi", null, true);
}

function getCategorie() {
    return getRequest("http://localhost:8080/api/categoria/categorie");
}

function eliminaUtente(id) {
    deleteRequest(`http://localhost:8080/api/user/delete-by-id/${id}`)
        .then(async response => await response)
        .then(data => {
            location.reload();
        })
        .catch((error) => console.error('Errore:', error));
}

function getUtente(id) {
    return getRequest(`http://localhost:8080/api/user/get?id=${id}`);
}