
import { NextFunction } from 'express';
import {Request, Response} from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthentication(request:Request, response:Response, next:NextFunction){

    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            message:"Token is missing."
        })
    }

   
    const [,token] = authToken.split(" ");
    const chave = process.env.SECRET
    try{
        verify(token, chave as string);
        return next();
    }
    catch(error){
        return response.status(401).json({
            message: "Token não é válido."
        })
    }

}