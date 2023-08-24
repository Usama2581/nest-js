// import { isString } from "util";

import { IsInt, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsInt()
    age: number;
    
    @IsString()
    email: string;
    
    @IsString()
    gender: string;

}
