function sum(a,b){
    var value=0;
    for(var i=0; i < arguments.length; i++){
        value+=arguments[i];
    }
    return value;
}


//rest operator
function sum2(...args){
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum2(5,5,5,2,3));

//utilizando arrow function

/* Erro de referencia porque o arguments nao foi definido
const sum3 = () => {
    console.log(arguments);
};

console.log(sum3(5,5,5,2,3));
*/

const sum4 = (a, b, ...rest) => {
    console.log(a,b,rest);
};
console.log(sum4(5,5,5,2,3));


const multiply = (...args) => args.reduce((acc, value) => acc *  value, 1)
const sum5 = (...rest) => {
    return multiply.apply(undefined, rest);
};

const sum6 = (...rest) => {
    return multiply(...rest);
};


const str = 'Digital Inovation One';
const arr = [1, 2, 3, 4];
function LogArgs(a, b, c){
    console.log(a, b, c);
}

LogArgs(...arr);

const arr2 = [5,6,7].concat(arr);
console.log(arr2);

const arr3 = [...arr,5,6,7];
console.log(arr3);

const arrClone = [...arr3];
const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test2: 'hello'
};
console.log(obj2);

