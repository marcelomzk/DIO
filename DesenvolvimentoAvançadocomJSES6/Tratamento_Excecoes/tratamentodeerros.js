class CustomError extends Error{
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}
//Maneira tradicional de tratamentos de erros (try/catch)
try{
    console.log(name);
    const name = 'Celso Henrique'; //const nao possui a propriedade de hoisting
    const myError = new CustomError({
        message:'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });
    throw myError;

}catch(err){
    console.log(err);
    console.log(err.data);
}finally{
    console.log('Keep going...');
}


