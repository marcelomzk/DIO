function multiply(a,b){
    return a*b;
}

console.log(multiply(5,5));

function multiply2(a,b){
    b = b || 1;
}

console.log(multiply2(5,5));

function multiply3(a,b){
    b = typeof b === 'undefined' ? 1 : b; //se b for undefined atribui-se o valor 1 a b caso contrario utiliza-se o valor de b
    return a*b;
}
console.log(multiply3(5));

//ou

function multiply4(a,b){
    if(typeof b === 'undefined'){
        b = 1;
    }
    return a*b;
}
console.log(multiply4(5));


// Quando um valor de um parametro nao for passado ou for do tipo undefined atribui-se um valor padrao
function multiply5(a, b=1){
    return a*b;
}
console.log(multiply5(5));
console.log(multiply5(5,0));

//Atribuindo 2 valores padrões 

function multiply6(a=2, b=1){
    return a*b;
}

console.log(multiply6(6));
console.log(multiply6(6,0));
console.log(multiply6(undefined,6));

function multiply7(a, b=a){
    return a*b;
}

console.log(multiply7(7));

//lazy evaluation
function randomNumber(){
    return Math.random()*10;
}
function multiply8(a, b=randomNumber()){
    return a*b;
}
console.log(multiply8(8));

