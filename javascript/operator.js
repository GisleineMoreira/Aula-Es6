/*rest operator, spread operator ...
spread operator  (quebra os itens e repassa pra outro lugar)
strings, arrays, literal objects e objetos iteraveis
-----------------------------------------------------------------

function sum(...args) {
   return args.reduce((acc, value) => acc + value, 0)
}

console.log (sum(5, 5, 5, 2, 3));
_______________________________

const sum = (a,b,...rest) => {
    console.log(a, b, rest)
};

console.log (sum(5,5,5,2,3));
______________________________

const multiply = (...args)  => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) =>{
    return multiply.apply(undefined, rest);
}

console.log (sum(5,5,5,2,3)); 
______________________________
SPEAD OPERATOR:


const multiply = (...args)  => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) =>{
    return multiply(...rest);
}

console.log (sum(5,5,5,2,3));

_________________________________
const str = `Digital Innovation One`;
function logArgs(...args){
    console.log(args)
}
logArgs(...str);
________________________________

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}
logArgs(...arr);
__________________________________
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

//const arr2 = arr.concat([5, 6, 7]);
//const arr2 = [...arr,5, 6, 7];
//const arr3 = [...arr,...arr,0,0];
const arrClone = [...arr];

console.log(arrClone);

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arrClone = [...arr];

const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test2: 'Hello'
};

console.log(obj2);
______________________________________ */
