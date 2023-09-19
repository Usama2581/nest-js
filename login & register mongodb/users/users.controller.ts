import { UserGuard } from './users.guards';
import { Body, Controller, Delete, Get, Param, Post, Res, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response, Request } from 'express';


@Controller('/auth')
export class UsersController {

    constructor(private user: UsersService) {}

    @Post('/register') 
    async register (@Body() body) {
        return await this.user.register(body)
    }
    
    @Post('/login') 
    async login (@Body() body, @Res({ passthrough: true }) res: Response) {

        const token =  await this.user.login(body)

        res.cookie('jwt', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 10000000) //expire in 10 seconds
        })
        // console.log(token)
        return token
    }

    @Get('/profile')
    @UseGuards(new UserGuard())
    async profile(@Req() req: Request) {
        return { message: 'success' }
    }

    @Get('/logout')
    logout(@Req() req: Request, @Res() res: Response) {
        
        res.clearCookie('jwt')
         return { message: 'loggedout' }
     
    }

    @Get('/')
    async getAll() {
        return await this.user.getAllUser()
    }
}

