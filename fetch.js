// Pobieranie danych, fetch zwraca obietnice
fetch('https://reqres.in/api/users')
    // dostajemy obiekt typu Response i zamieniamy na obiekt w JS
    .then((response) => response.json())
    // Dane z serwera
    .then(data => {
        console.log(data);
    })