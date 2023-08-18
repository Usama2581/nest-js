// import { query } from 'express';
import { UserService } from './users.service';
import { Body, Controller, Param, Post, Get, Put, Query, Delete } from '@nestjs/common';



@Controller('/users')

export class UserController {

    constructor(private UserService: UserService) { }

    @Post('/post')
    async create(@Body() body) {
        await this.UserService.create(body)
        return { message: 'User added' }
    }

    @Get('/all')
    async findAllUsers () {
    //    const id = param.id
    //    console.log(id)
       const data = await this.UserService.findAll()
       return { data: data }
    }

    @Put('/update/:id')
    async updateUser(@Param() param, @Body() body) {
        const id = param.id
        const user = await this.UserService.update(id, body)
        return { user }
    }

    @Get('/one/:id')
    async findOneUser(@Param() param) {
         const id = param.id 
        const user = await this.UserService.findOne(id)
        return { user }
    }

    @Delete('/delete/:id')
    async delete (@Param() param) {
        const id = param.id
        const user = await this.UserService.delete(id)
        return { user }
    }

}