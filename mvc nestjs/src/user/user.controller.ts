import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ValidationPipe, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express'

@Controller('/users')

export class UserController {

  constructor(private userService: UserService) {}


  @Get()
  async getView(@Res() res: Response) {
    return res.render('index', { user: await this.userService.getAll()})
  }
 
  @Post('/add')
  create(@Body(ValidationPipe) body: CreateUserDto) {
    return this.userService.add(body)
  }

  @Get('/')
  findAll() {
    return this.userService.getAll()
  }

  @Get('/one/:id')
  findOne(@Param('id') id) {
    return this.userService.getOne(id)
  }

  @Put('/update/:id')
  updateUser(@Param('id') id, @Body() body) {
    return this.userService.update(id, body)
  }

  @Delete('/:id')
  deleteUser(@Param('id') id) {
    return this.userService.delete(id)
  }



 
}
