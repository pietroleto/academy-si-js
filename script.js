async function getRequest(url, body = null, auth = null) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    };

    if (auth) { //il metodo richiede un'autorizzazione speciale
        const token = JSON.parse(localStorage.getItem('data')).token; //prelevo il token
        requestOptions.headers['Authorization'] = `Bearer ${token}`; //lo aggiungo all'header
    }

    return fetch(url, requestOptions);
}

async function postRequest(url, body = null) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    };

    return fetch(url, requestOptions)
}

async function deleteRequest(url, body = null) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    };

    return fetch(url, requestOptions)
}

async function putRequest(url, body = null) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    };

    return fetch(url, requestOptions)
}