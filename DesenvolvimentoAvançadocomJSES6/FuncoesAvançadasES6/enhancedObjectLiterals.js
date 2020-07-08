var obj = {
    prop1:'Digital Inovation One'
};
console.log(obj);
// ou

var prop2 = 'Digital Inovation One';
var obj1 = {
    prop1: prop2
}

console.log(obj1);

//Serve também para métodos
function method(){
    console.log("method called");
}
var obj3 = {
    method1: method
}
console.log(obj3);
obj3.method1();


var obj4 = {
  sum: function sum(a, b){
      return a+b;
  }  
};
console.log(obj4.sum(1,5));




var propName = 'test';
var obj5 = {

};
obj5[propName + 'concat'] = 'prop value';
console.log(obj5);

//ou

var propName = 'test';
var obj6 = {
    [propName + 'concat']: 'prop value'
};
console.log(obj6);