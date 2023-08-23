import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('/users')

export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post('/add')
  async create(@Body() body) {
    // console.log(body)
    return await this.userService.create(body)
  }

  @Get('/')
  findAll() {
    return this.userService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id) {
    return this.userService.findOne(id);
  }

  @Put('/update/:id')
  update(@Param('id') id: string, @Body() body) {
    console.log(id, body)
    return this.userService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

}
