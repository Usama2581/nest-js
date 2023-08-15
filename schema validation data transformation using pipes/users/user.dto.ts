import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class UserDTO {
    // @IsString()
    // @IsNotEmpty()
    // name: string;
    
    // @IsInt()
    // @IsNotEmpty()
    // age: number;
    
    // @IsString()
    // @IsNotEmpty()
    // email: string;
    
    // @IsNotEmpty()
    // password: any;
    
    // @IsNotEmpty()
    // @IsString()
    // gender: string;
    @Type(() => Number)
    @IsNumber()
    day : number;

    @Type(() => Number)
    @IsNumber()
    date: number;

}