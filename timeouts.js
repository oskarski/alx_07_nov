// Wykonuje funkcje po pewnym czasie
const timoutId = setTimeout(() => {
    console.log('Wykonalam sie', new Date().toTimeString());
    // Minimalny czas w milisekundach
}, 3_000);

// Czyszczenie timeoutu
// clearTimeout(timoutId);

// Symulacja dlugiej operacji
// while (true) {
//     if (new Date().getSeconds() > 15) break;
// }

console.log('Po setTimeout', new Date().toTimeString());

// Wykonuje funkcje co pewien czas
const intervalId = setInterval(() => {
    const now =  new Date();

    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
    // minimalny czas interwaluw milisekundach
}, 1_000);

// Wyczysc interwal po 5 sekundach
setTimeout(() => {
    clearInterval(intervalId);
}, 5_000);