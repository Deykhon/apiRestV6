//codigo inicial para la aplicacion
import express, {Express} from "express";// lo del corchetes es el tipo de dato (Express)
import * as bodyParser from "body-parser" ;//bodyParse hace que todos los datos que viajan por http(binario) lo combierta a legible
import UserModules from "./modules/usermodule/init";
class App{
    public app: Express = express();
    constructor(){
        this.configuration();
        this.connectDatabase();
        this.initApp();
    }
    public connectDatabase(){
        console.log("data base ready");
    }
    public configuration(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false})); // uusa la codificacion de url mas corta
        
    }
    public initApp(){
        console.log("LOADING MODULES");
        const userModule = new UserModules("/api", this.app );
    }
}
export default new App();   //el new inicializa la instancia App