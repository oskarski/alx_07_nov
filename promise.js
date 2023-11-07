const promise = new Promise((success, reject) => {
    // pending -> stan w trakcie
    // fullfilled -> stan sukcesu
    // rejected -> stan bledu

    setTimeout(() => {
        const API_DATA = 'dane z api';

        success(API_DATA);
        // reject(new Error('API ERROR!'))
    }, 3_000);
});

// console.log(promise);

// promise.then((data) => {
//     console.log('Wykonala sie obietnica');
//     console.log('Dane ' + data);
// }, (error) => {
//     console.log('Blad: ' + error)
// });

// promise
//     .then((data) => {
//         console.log('Wykonala sie obietnica');
//         console.log('Dane ' + data);

//         return 10;
//     })
//     .then(n => {
//         console.log(n);
//     })
//     .catch((error) => {
//         console.log('Blad: ' + error)
//     })
//     .finally(() => {
//         console.log('Zawsze sie wykonam')
//     });

// console.log('Po promise');

const api = (time, data, rejectPromise) => {
    return new Promise((success, reject) => {
        setTimeout(() => {
            if (rejectPromise) reject(new Error('API ERROR!'))
            else success(data);
        }, time);
    });
}

// const firstPromise = api(2_000, 'po 2s', false);

// const secondPromise = api(4_000, 'po 4s', false);

// const thirdPromise = api(3_000, 'po 3s', true);

// // Czeka na wszystkie obietnice z tablicy
// // Konczy sie sukcesem, jesli wszystkie obietnice zakonczyly sie sukcesem
// // Konczy sie bledem, jesli dowolna obietnica zakonczyla sie bledem
// Promise.all([
//     firstPromise,
//     secondPromise,
//     thirdPromise
// ]).then(() => {
//     console.log('Promise all sukces')
// }).catch(() => {
//     console.log('Promise all blad')
// });
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#static_methods

// const response = api(3_000, 'Sukces', false);

// response.then(data => {
//     console.log('SUKCES!');
// });

// Funkcja async/await 
const fetchData = async () => {
    try {
        // Czekamy na zakonczenie obietnicy
        const response = await api(3_000, 'Sukces', true);
        
        // Odpali sie dopiero po zakonczeniu obietnicy
        console.log('Linijka po obietnicy');

        // Obsluga bledu 
    } catch(err) {
        console.log('Blad: ', err);
    } finally {
        // ... 
    }

    // Przyklad z tablica funkcji zwracajacych obietnice, gdzie po kolei wywolujemy kazda z nich
    // const operations = [
    //     () => api(3_000, 'Sukces', true),
    //     () => api(3_000, 'Sukces', true)
    //   ];

    // for (const operation of operations) {
    //     try {
    //         await operation();
    //     } catch(err) {

    //     }
    // }
};

// const fetchData = () => {
//     const response = api(3_000, 'Sukces', false);

//     response.then(() => {
//         console.log('Linijka po obietnicy');
//     });
// };

fetchData();

console.log('Po Fetch Data');


