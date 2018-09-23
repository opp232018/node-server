import express, {NextFunction, Request, Response} from "express";
import bodyParser from "body-parser";
import path from "path";
import http from "http";
import Routes from "./router";
import {Config} from "./config";

class Server {

    public serverApp: express.Application;
    private appRouter: Routes;

    constructor() {
        this.serverApp = express();
        this.appRouter = new Routes(this.serverApp);
    }

    public config(serverApp: express.Application){
        serverApp.use(bodyParser.json({limit: "50mb"}));
        serverApp.use(
            bodyParser.urlencoded({
                extended: true,
                limit: "50mb",
                parameterLimit: 10000000
            })
        );

        serverApp.use((req: Request, res: Response, next: NextFunction) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Header", "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
            res.header("Access-Control-Allow-Credentials", "true");

            // Intercept OPTIONS method
            if(req.method = "OPTIONS"){
                res.header("Access-Control-Allow-Methods", "GET,POST,PATH, PATCH, DELETE, PUT");
                res.send(200);
            }else{
                next();
            }
        });
    }

    public routes(serverApp: express.Application, routerlink: express.Router){
        serverApp.use( (req: Request, res: Response, next: NextFunction) => { 
            if (!serverApp.get("mongoConnection")) {
                // const conString = req.originalUrl.split("/")[1] === "test" ?       
                const conString = Config.MONGO_CON_URL;          
            }else{

            }
        });
    }
}

export default new Server();