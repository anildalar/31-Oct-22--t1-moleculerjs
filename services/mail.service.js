

//1. Default Export

//2. Named Export

//2.1 exports.something

//2.2 module.exports = something

module.exports = {
    //1. Property:value
    name:"mail" , //String

    events:{
        "xyz"(ctx){
            //Function
            console.log('Event received in mail service',ctx.params.name);
        }
    }, //JS Object
    //2. Method
}; // JS Object