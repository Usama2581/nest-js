import { IsNotEmpty, IsString } from "class-validator";


export class AddressDTO {

    @IsString()
    @IsNotEmpty()
    address: string;
    
    @IsString()
    @IsNotEmpty()
    city: string;
    
    @IsNotEmpty()
    @IsString()
    country: string;
}