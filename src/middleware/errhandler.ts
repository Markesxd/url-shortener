import {Request, Response, NextFunction } from "express";
import HTTPError from '../errors/httperror';

const handler = (error: Error, req: Request, res: Response, next:NextFunction) => {
    if(error instanceof HTTPError){
        res.status(error.code);
    } else {
        res.status(500);
    }
    res.json({message: error.message});
    next();
}

export default handler;