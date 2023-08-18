import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

@Injectable()

export class UserGuard implements CanActivate {
    
    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp()
        const req = ctx.getRequest<Request>()
        if(req.body.name === 'usama') {
            return true
        }
        else {
            return false
        }
    }

}