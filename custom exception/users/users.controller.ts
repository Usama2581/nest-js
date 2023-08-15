
import { Controller, Param, Post, UseFilters, BadRequestException } from '@nestjs/common';
import { UserCustomExceptionFilter } from './user.exception.filter';

@Controller("/users")

export class UserController {

    @UseFilters(UserCustomExceptionFilter)
    @Post('/post/:name')
    add (@Param() param) {
      console.log(param.name)
      if(param.name === 'usama') {
        return { message: 'succes' }
      }
      else {
        throw new BadRequestException()
      }
    }
}