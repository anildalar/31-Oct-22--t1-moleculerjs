

//1. Default Export

//2. Named Export

//2.1 exports.something

//2.2 module.exports = something

module.exports = {
    //1. Property:value
    name:"user" , //String

    settings:{}, //JS Object

    dependencies:[], //JS Array

    actions:{}, //JS Object

    methods:{}, //JS Object

    events:{
        "user.purchased":{
            //1. p:v

            //2. method
            handler(ctx){ //ctx = context
                //emit(eventName: string, data, groups, payload: any)
                ctx.emit("xyz",{name:"OKLABS"})
                console.log("hi ",ctx.params)
            }
        }
    }, //JS Object

    //2. Method
}; // JS Object