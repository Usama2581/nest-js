import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


@Schema()

export class Address {
    @Prop()
    address: string;
    
    @Prop()
    city: string;

    @Prop()
    country: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address)



