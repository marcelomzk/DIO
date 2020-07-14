//Symbol é um identificador
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId ===uniqueId2);

//pode ser usado para ser gerar propriedades privadas
const obj = {
    [uniqueId]: 'Hello'
};
console.log(obj);

//Well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

/*const obj = {
    [Symbol.iterator](){

    }
};*/

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
const str = 'Digital Innovation One';

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Uma outra forma de fazer isso é utilizando o laço while
while(true){
    let {value, done} = it.next();
    console.log(value);
    if(done){
        break;
    }
}


//Com o ES6
for(let value2 of str){
    console.log(value2);
}

//Iteração de objeto
const obj2 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

//const it2 = obj2[Symbol.iterator]()

//console.log(it2.next());
//console.log(it2.next());
//console.log(it2.next());
//console.log(it2.next());
//console.log(it2.next());

const arr2 = [...obj2];

console.log(arr2);

//Generators são funções com pausa
function* hello(){
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function!');
}

const it3 = hello();
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());

)


