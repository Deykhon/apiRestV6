import { Request, Response} from "express"; //Request y response son metodos la express
class RoutesController{
    constructor(){
        
    }
    public async createUsers(request: Request, response: Response) {
        return response.status(200).json( {server: "Hola mundo soy sms de post"});
    }
    public async getUsers(request: Request, response: Response) {
        return response.status(200).json( {server: "Hola mundo soy sms de get"});
    }
    public async isPrime(request: Request, response: Response){
        const data = request.body;          //reques.body es una peticion de tipo post. en body se almacena el post
        var number = Number(data.number);
        for(var i = 2; i < number / 2; i++){
            if(number % i == 0){
                return response.status(200).json( {number, msn: "no es primo"});
            }
        }
        return response.status(200).json( {number, msn: "Es primo"});

    }
}
export default RoutesController;