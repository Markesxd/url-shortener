import HTTPError from "./httperror";


class BadParameter extends HTTPError {
    constructor(message: string){
        super(message);
        this.code = 400;
    }
}

export default BadParameter;