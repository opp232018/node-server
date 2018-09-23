import { Request, Response } from "express";

export class Users {
    constructor(){


    }

    getUsers(){
        return (req: Request, res: Response) => {
               res.status(200).send({message: "get users"}); 
        }
    }
}