import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

// DTO class with validation and transformation decorators
class DTO {
    @IsNumber()
    @Type(() => Number)
    day: number;

    @IsNumber()
    @Type(() => Number)
    date: number;
}

@Controller('/users')
export class UserController {
    @Get('/get')
    get(@Query(new ValidationPipe({ transform: true })) query: DTO) {
        console.log(query);
        return query;
    }
}
        // @Post('/post')
        // addUser(@Body(ValidationPipe) body : UserDTO) {
        //   return { message: body }
        // }
    
        // @Get('/get/:id')
        // getUser (@Param('id', new ValidationPipe({ transform: true })) id : number ) {
        //    return { message: typeof id }
        // }