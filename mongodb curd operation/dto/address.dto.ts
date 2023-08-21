import { IsString } from 'class-validator';


export class AddressDTO {

    @IsString()
    address: string;

    @IsString()
    country: string;

    @IsString()
    city: string;

}