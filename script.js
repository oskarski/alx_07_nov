// Przypomnienie truthy i falsy

const bool = false; //true;
const string = '';

// wartosci falsy:
// ''
// 0
// null
// undefined
// false

// Wartosci truthy:
// 'asd'
// []
// {}
// [1,2]
// 123
// true

function sum(a, b) {
    return a + b;
}

const multiply = (a, b) => {
    // this.c = a;

    // return this.c / b;
    return a * b;
}

// Mozna tez tak, zeby bylo szybciej
// const multiply = (a, b) => a * b;

// Tak tez mozna
// const abs = (a) => {
//     return a * b;
// }

const abs = a => {
    return a * b;
}

const print = () => {
    console.log('Hello');
}

const getDate = () => new Date();

// Zwroc ostatni czlon lub pierwszy falsy ( nie false )
// const getDate = (a, b) => a && b && 'Czesc';

// Wyrazenie funkcyjne
const subtract = function (a, b) {
    return a - b;
}


const result = sum(1, 4);
const result__2 = multiply(1, 4);

// Wroce z this'em

// Okej, bo function jest dostepne w calym pliku
bottom()

function bottom() {
    console.log('Na samym dole')
}

// Blad, bo stala jest definiowana nizej
// arrowBottom()

// const arrowBottom =  () => {
//     console.log('Arrow Na samym dole')
// }