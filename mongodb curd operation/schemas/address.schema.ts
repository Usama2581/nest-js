import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()

export class Address {

    @Prop()
    address: string;

    @Prop()
    city: string;

    @Prop()
    country: string;

    @Prop()
    state: string;

    
}

const AdressSchema = SchemaFactory.createForClass(Address)

export {
    AdressSchema
}