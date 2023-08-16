import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, Request, NextFunction } from "express";


export function UserMiddleware (req: Request, res: Response, next: NextFunction) {
    console.log('middleware function')
    next()
}

//CLASS MIDDLEWARE-------> 

@Injectable()
export class UserMiddlewares implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
        console.log('Class middleware')
        next()
    }
    
}
