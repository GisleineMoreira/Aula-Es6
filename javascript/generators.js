//generatos são funções com pausa e "despausa" através da interface de ITERAÇÃO (Symbols)
//através do value e do done

/*function hello(){
    console.log('Hello');
    console.log('From');
    console.log('Function')

}
hello();
_____________________________
function* hello() {
    console.log('Hello');
    yield;
    console.log('From');
    yield;
    console.log('function!');
}
const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); //true
______________________________
function* hello() {
    console.log('Hello');
    yield 1;
    console.log('From');
    const value = yield 2;

    console.log(value);
}
const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Dutside!')); //true
______________________________

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
______________________________*/

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
       for (var i = 0; i < this.values.length; i++) {
         yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}