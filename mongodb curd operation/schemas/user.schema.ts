import { Address, AddressSchema } from './address.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { Schema, Document } from 'mongoose';
// import { Schema } from 'mongoose';


@Schema()
export class User {
   
    @Prop({ require: true })
    name: string;

    @Prop({ require: true })
    email: string;

    @Prop({ require: true })
    password: string;

    @Prop({ require: true })
    age: number;

    @Prop({ require: true })
    gender: string;

    @Prop({ require: true, type: AddressSchema })
    address: Address;
    
}


type UserDocument = User & Document
const UserSchema = SchemaFactory.createForClass(User)
const UserModel = 'User'

export {
    UserSchema,
    UserModel,
    UserDocument
}