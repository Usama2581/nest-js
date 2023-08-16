import { Body, Controller, Post, UseInterceptors } from "@nestjs/common";
import { UserInterceptor } from "./user.interceptor";
// import { UserInterceptor } from "./user.interceptor";

@Controller('/users')

export class UserController {

    @UseInterceptors(UserInterceptor)
    @Post('/')
    add(@Body() body) {
        return { message: body.name } 
    }

}