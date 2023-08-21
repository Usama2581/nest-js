import { UserDTO } from './../dto/users.dto';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';

@Controller('/users')

export class UsersController {

    constructor(private user: UsersService){}

    @Get('/all')
    async getAllUsers() {
        const user = await this.user.findAll()
        return user
    }

    @Get('/one/:id')
    async getOneUsers(@Param() param) {
        const id = param.id
        // console.log(id)
        const user = await this.user.findOneUser(id)
        return user
    }

    @Post('/add')
    async createOne(@Body(new ValidationPipe({ transform: true })) body: UserDTO) {
        const user = await this.user.addUser(body)
        return user
    }

    
    @Put('/update/:id')
    async upadteOne(@Body() body, @Param() param) {
        const id = param.id
        const user = await this.user.updateUser(id, body)
        return user
    }

    @Delete('/:id')
    async delete(@Param() param) {
        const id = param.id
        const user = await this.user.deleteUser(id)
        return user
    }
    

    
    
}