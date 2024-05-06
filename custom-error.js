class CustomError extends Error{
    constructor(message){
        super(message)
        this.name = this.constructor.name;
    }
}

function checkNumber(num){
    if(isNaN(num)){
        throw error = new CustomError("Throw Customized Error!");
    }
    return num;
}

try{
    checkNumber("숫자가 아님");
}catch(err){
    console.log(err);
}