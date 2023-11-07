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

console.log(promise);

// promise.then((data) => {
//     console.log('Wykonala sie obietnica');
//     console.log('Dane ' + data);
// }, (error) => {
//     console.log('Blad: ' + error)
// });

promise
    .then((data) => {
        console.log('Wykonala sie obietnica');
        console.log('Dane ' + data);

        return 10;
    })
    .then(n => {
        console.log(n);
    })
    .catch((error) => {
        console.log('Blad: ' + error)
    })
    .finally(() => {
        console.log('Zawsze sie wykonam')
    });

console.log('Po promise');