
/*var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr [3][0];


//destructuring Assignment

var [apple2, banana2, orange2, [tomato2] ] =

 ['Apple', 'Banana', 'Orange', ['tomato'] 
];

 console.log(tomato2)
-------------------------------
var arr = ['Apple', 'Orange'];
 var obj = {
    name: ' Celso'
};

//destructuring Assignment
var [apple2] = arr;
var { name: name2 } = obj;

console.log(name2);
-------------------------------

var arr = ['Apple', 'Orange'];
 var obj = {
    name: ' Celso',
    props:{
        age:26,
        favoriteColors: ['Black', 'blue']
    }
};
 
var age = obj.props.age;

//destructuring Assignment
var [apple2] = arr;
var {
    props: { age: age2, 
        favoriteColors: [color1, color2]
     }
} = obj;

console.log(color1);
-------------------------------

var arr = [{ name: 'Apple', type: 'Orange'}];
 var obj = {
    name: ' Celso',
    props:{
        age:26,
        favoriteColors: ['Black', 'blue']
    }
};
 
var fuit1 = arr[0].name;
//destructuring Assignment
var [{ name }] = arr;


console.log(name);
-------------------------------

var arr = [{ name: 'Apple', type: 'Orange'}];
 var obj = {
    name: ' Celso',
    props:{
        age:26,
        favoriteColors: ['Black', 'blue']
    }
};
 
var fuit1 = arr[0].name;
//destructuring Assignment
let [{ name: fruitName }] = arr;

//functions
function sum(arr) {
    return arr[0] + arr[1];
}

console.log(sum([5, 5]));
-------------------------------*/
