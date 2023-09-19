import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')

export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post('/post')
  create(@Body() createUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/get')
  findAll() {
    return this.userService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id) {
    return this.userService.findOne(id);
  }

  @Put('/update/:id')
  async update(@Param('id') id, @Body() body) {
    const user = await this.userService.findOne(id)

    if (!user) {
      throw new NotFoundException('User not found')
    }
    else {
      user.username = body.username
      user.profile.gender = body.gender

      return this.userService.update(id, user)
    }
  }

  @Delete('/:id')
  remove(@Param('id') id) {
    return this.userService.remove(id);
  }

}
