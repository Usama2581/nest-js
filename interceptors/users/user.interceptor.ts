import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Response, Request } from "express";

@Injectable()

export class UserInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler): any {
        const ctx = context.switchToHttp()
        const res = ctx.getResponse<Response>()
        const req = ctx.getRequest<Request>()

        //To add body
        req.body.name = 'usama'

        //To change response
        return next.handle().pipe(map(() => {
            return { message: 'response changed' }
        }))
    }
    
}



