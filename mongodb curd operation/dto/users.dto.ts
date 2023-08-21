// import { Address } from './../schemas/address.schema';
import { Type } from 'class-transformer';
import { AddressDTO } from './address.dto';
import { IsInt, IsNotEmpty, IsString, ValidateNested } from "class-validator";
// import { AdressDTOdressDTO } 

export class UserDTO {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsInt()
    @IsNotEmpty()
    age: number;

    @IsString()
    @IsNotEmpty()
    gender: string;

    // @IsString()
    // @IsNotEmpty()
    // name: string;
    @Type(() => AddressDTO)
    @ValidateNested()
    @IsNotEmpty()
    address: AddressDTO;

}