//Promises

/*
const myPromise = new Promise((resolved, reject) => {
});
*/


const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('First Data');
    }, 1000);
});

const doOtherthingPromise = () =>
    new Promise((resolve, reject) => {
    
        setTimeout(function(){
            //did something
            resolve('Second Data');
        }, 1000);
});

doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherthingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));
//console.log(doSomethingPromise);
//doSomethingPromise.then(data => console.log(data)).catch(error => console.error(error));

/*
Uma promise pode ter três estados:
pending(quando está pendente e/ou em execução), fulFilled(terminou de executar), Rejected(caso aconteça algum erro)
*/

//Callbacks
/*function doSomething(callback){   
    setTimeout(function(){
        callback('First data');
    }, 1000);
}


function doOtherThing(callback){
    setTimeout(function(){
        callback('Second data');
    }, 1000);
}

//callback hell
function doAll(){
    try{
        doSomething(function(data){
            var processedData = data.split('');

            try{
                doOtherThing(function(data2){

                    try{
                        var processedData2 = data2.split('');
                        setTimeout(function(){
                            console.log(processedData, processedData2);
                        }, 1000);
                    }catch(err){
                        //handle error
                    }
                    
                });
            }catch{
                //handle error
            }
            
        });
    }catch(err){
        //handle error
    }
    
}

doAll();
*/
