// funkcja czysta -> zawsze zwraca ten sam wynik dla tych samych argumentow
const sum = (a, b)=> a + b;

const notPurseSum = (a, b)=> {
    const date = new Date();

    if (date.getSeconds() > 10) return 0;

    return a + b;
};

let counter = 0;

const print = () => {
    if (counter > 3) {
        console.log('Powzyej')
    } else {
        console.log('Ponizej 3')
    }
}

// print()
// print()
// print()
// counter = 4;
// print()
// print()

const products = [
    {
        name: 'Banany',
        quantity: 3,
        price: 3,
    },
    {
        name: 'Jablko',
        quantity: 0,
        price: 2,
    },
    {
        name: 'Sliwki',
        quantity: 13,
        price: 4,
    }
];

const printProduct = product => {
    console.log(product.name);
}

products.forEach(printProduct);

let quantitySum = 0;

products.forEach((product, index) => {
    quantitySum += product.quantity;
});

console.log(quantitySum);

const totalQuantity = products.reduce((accumulator, product) => {
    return accumulator + product.quantity;
}, 0);

console.log(totalQuantity)

// Mozna tez tak szybciej ( Pamietamy o nawiasach okraglych kiedy zwracamy obiekt)
// const productsObject = products.reduce((accumulator, product) => ({ 
//     ...accumulator,
//      [product.name]: product.quantity 
//     }), {})
const productsObject = products.reduce((accumulator, product) => {
    return { 
        // kopiowanie obiektu
        ...accumulator,
        // Definiowanie dynamicznych kluczy w obiekcie 
         [product.name]: product.quantity 
        }
    },
    // Zaczynamy od pustego obiektu
    {}
);

console.log(productsObject)

const productsArray = products.reduce(
    // Nie ma ciala funkcji - od razu zwracamy nowa tablice
    (accumulator, product) => [
        // kopiujemy accumulator do nowej tablicy
        ...accumulator,
        // Dodajemy nowy element, ktory jest 2 elementowa tablica
        [product.name, product.quantity]
    ], 
    // Zaczynamy od pustej tablicy
    []
);

console.log(productsArray);

// const first = () => Math.random();

// const second = (arg) => arg * 2;

// second(first(third()), fourth())
