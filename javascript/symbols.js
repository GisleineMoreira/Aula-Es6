//symbols e itarators

 //Symbol fazidentificão unica

/*const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol ('Hello')

console.log(uniqueId === uniqueId2);
--------------------------------------

const uniqueId = Symbol ('Hello');

const obj = {
    [uniqueId]: 'Hello'
};
console.log(obj)
--------------------------------------
const uniqueId = Symbol('Hello');

//Well number Symbols
Symbol.itarator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];


const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
--------------------------------------

const uniqueId = Symbol('Hello');

Symbol.iterator;
Symbol.split;
Symbol.toStringsTag;

const arr = [1, 2, 3, 4]

for (let value of arr) {
    console.log(value);
}
 -------------------------------------

 const uniqueId = Symbol('Hello');
 Symbol.iterator;
 Symbol.split;
 Symbol.toStringTag;

 const arr = [1, 2, 3, 4];
 const str = ' Digital innovation one';

 const arr2 = [...str, ...arr];
 console.log(arr2);
 ------------------------------------- 

 const uniqueId = Symbol('Hello');

 Symbol.iterator;

 const arr = [1, 2, 3, 4];
 const str = ' Digital innovation one';

 const obj = {
     values: [1, 2, 3, 4],
     [Symbol.iterator]() {
         let i = 0;
         
         return {
             next: () =>{
                 i++;

                 return{
                     value: this.values[i - 1],
                     done: i > this.values.length
                 };
             }
         };
     }
 };

 //const it = obj[Symbol.iterator]();
 //console.log(it.next());

 // const arr2 =[...obj];
 // console.log(arr2);
 ------------------------------------- */
  
 const uniqueId = Symbol('Hello');

 Symbol.iterator;

 const arr = [1, 2, 3, 4];
 const str = ' Digital innovation one';

 //generators

