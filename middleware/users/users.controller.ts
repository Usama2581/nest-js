import { Controller, Get, Post } from '@nestjs/common';


@Controller('/users')

export class UserController {

    @Post('/post')
    add () {
        return { message: 'user page' }
    }
    @Get('/get')
    add1 () {
        return { message: 'user page' }
        // return 'user page'
    }

}