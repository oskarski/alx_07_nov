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

const person = {
    name: 'oskar',
    address: {
        street: 'Jasna 14',
        city: 'Warszawa'
    }
};

// Plytkie kopiowani - shallow copying. Musimy sami zadbac o skopiowanie obiketu bedacego adresem 
const copyOfPerson = {...person, address: {...person.address}};

person.name = 'maciek';
person.address.street = 'Marszalkowska 15';

console.log(person);
console.log(copyOfPerson);

// const anotherCopyOfPerson = {...person};
// const lodashCopyOfPerson = _.cloneDeep(person);
// TODO Wrocic z lodashem!

person.address.street = 'Zlota';

// console.log(anotherCopyOfPerson);
// console.log(lodashCopyOfPerson);

// Czasami najlepsze rozwiazanie, kiedy mamy tylko dane w obiekcie
const copyWithJSON = JSON.parse(JSON.stringify(person));

// const first = () => Math.random();

// const second = (arg) => arg * 2;

// second(first(third()), fourth())

// Mapowanie elementow tablicy na nowa tablice ze zmienionymi elementami
const mappedProducts = products.map((product, i) => {
    return {
        ...product,
        name: product.name.toUpperCase(),
        total: product.price * product.quantity,
        index: i
    }
});
// W react najczesciej tak by to wygladalo:
// const mappedProducts = products.map((product, i) => ({
//     ...product,
//     name: product.name.toUpperCase(),
//     total: product.price * product.quantity,
//     index: i
// }));

console.log(mappedProducts);

// Przefiltruj produkty -> wez tylko te, ktore spelniaja warunek
const filteredProducts = products.filter(product => product.quantity > 0);

console.log(filteredProducts)

console.log(
    // Laczenie wywolan
    products
        .filter(product => product.quantity > 0)
        .map(product => product.quantity) 
);

// Znajdz pierwszy pasujacy element z tablicy i go zwroc
// Jesli sie nie udalo znalezc to zwraca undefined
const foundProduct = products.find(product => product.quantity === 0);

console.log(foundProduct);

