import { Type } from 'class-transformer';
import { AddressDTO } from './address.dto';
import { IsInt, IsNotEmpty, IsString, ValidateNested } from "class-validator";


export class UserDTO {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsNotEmpty()
    age: number;
    
    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

   
}