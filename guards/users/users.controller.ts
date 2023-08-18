import { Controller, Post, UseGuards } from '@nestjs/common';
import { UserGuard } from './users.guard';

@Controller('/users')

export class UserController {

    @Post('/')
    @UseGuards(new UserGuard())
    name() {
        return { message: 'success' }
    }

}