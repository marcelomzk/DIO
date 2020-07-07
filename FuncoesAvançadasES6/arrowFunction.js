/* function log(value){
    console.log(value)
} */

//funçoes anonimas
var log = function(value){
    console.log(value);
};

log('test');

var sum = function(a, b){
    return a+b;
}

log(sum(5,5));

//Arrow functions
//são funções anonimas (atribuir o valor a uma variavel)
//pode-se omitir "function" e os valores dentro dos parenteses sao os parametros da função
var sub = (a,b) => a-b;
log(sub(5,10));

//Se houver somente um parametro pode omitir os parenteses
var dobro = a => a*2;
log(dobro(3));

//Arrow Functions para objetos
var createObj = () => ({teste: 123});
log(createObj());

//Hoisting não funciona para Arrow Functions
/* log('teste')
var log = value => {console.log(value)};
*/



