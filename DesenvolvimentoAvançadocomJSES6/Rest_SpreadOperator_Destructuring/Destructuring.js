var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];
console.log("Valor da variável apple: "+apple);
console.log("Valor da variável banana: "+banana);
console.log("Valor da variável orange: "+orange);
console.log("Valor da variável tomato: "+tomato);

//Outra forma de fazer isso é utilizando o Destructuring Assignment
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']]; //Desconstrui-se o array "arr" e atribui-se a cada variavel o valor correspondente
console.log(apple2, banana2, orange2, [tomato2]);

var [apple3, banana3, orange3] = ['Apple', 'Banana'];

console.log("Valor de apple3: "+ apple3);
console.log("Valor de banana3: "+ banana3);
console.log("Valor de orange3: "+ orange3); //O valor de orange3 é undefined porque não está definida no array

//Destructuring em objetos

var obj = {
    name: 'Marcelo',
    address: 'test'
};

var name = obj.name;

var {name} = obj; //desconstroi o objeto, encontra uma propriedade "name" e atribui seu valor a uma variavel name
console.log(name);

var {address} = obj;
console.log(address);

var {name: name2} = obj;
console.log(name2);

var arr2 = ['Apple', 'Orange'];
var obj2 = {
    name:'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var age = obj2.props.age;
//utilizando destructuring
var {props:{age: age2} } = obj2; 
/*
Primeiro desconstroi o objeto (obj2), logo em seguida encontra-se uma propriedade "props: {age}" e desconstroi-na.
Ao desconstruir temos o acesso a "age", que por sua vez sera atribuida a variavel age2
*/
console.log(age2);

var color1 = obj2.props.favoriteColors[0];
//utilizando destructuring
var {props:{favoriteColors: [color1, color2]}} = obj2;
/*
Novamente, descontroi-se o obj2, encontra-se a propriedade "props: {favoriteColors}" e descontroi-na.
A propriedade favoriteColors é atribuida às variaveis color1 e color2
*/
console.log(color1)
console.log(color2)

//Objeto dentro de um array
var arr3 = [{name: 'Apple', type: 'Fruit'}];
var fruit1 = arr3[0].name;
var [{name: fruitName}] = arr3;
console.log("Valor de fruit1: "+fruit1);
console.log("Valor de name: "+ fruitName);



//Usando destructuring em funções
function sum(arr4){
    return arr4[0] + arr4[1];
}

console.log(sum([5,5]));

function sum([a,b] = [0,0]){
    return a + b;
}

function sum2({a,b}){
    return a+b;
}
console.log(sum2({a: 3, b: 4}));