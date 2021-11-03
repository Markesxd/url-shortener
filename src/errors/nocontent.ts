import HTTPError from "./httperror";

class NoContent extends HTTPError {
    constructor(message: string){
        super(message);
        this.code = 404;
    }
}

export default NoContent;