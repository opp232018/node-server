import express, { Router } from "express";
import { Users } from "./routes/Users";
class Routes {
    public router: Router;
    
    constructor(serverApp: express.Application){  
        this.router = Router();
        this.routes();
    }

    routes(){
        this.Users("users", new Users);
    }

    Users(url: string, api: any){
        this.router.get(`/${url}/`, api.getUsers());
    }
}

export default Routes;