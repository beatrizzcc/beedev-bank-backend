export class RequestError extends Error{

    constructor(message){
        super();
        this.name = this.constructor.name
        this.message = message
        console.log('iniciou a class')
    }

}
