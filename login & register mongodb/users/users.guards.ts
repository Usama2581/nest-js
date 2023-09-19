import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class UserGuard implements CanActivate {

    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp()
        const req = ctx.getRequest<Request>()
        const jwt = req.cookies['jwt']
        console.log(jwt)
        if(jwt) {
            return true
        }
        else{ 
            return false
        }
    }
}