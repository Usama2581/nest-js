import { Address, AddressSchema } from './address.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true,
    discriminatorKey: 'userType' //to differentiate the user account type
})
export class User {

    @Prop({ require: true })
    name: string;

    @Prop({ require: true })
    age: number;

    @Prop({ require: true })
    gender: string;

    @Prop({ require: true })
    email: string;

    @Prop({ require: true })
    password: string;

    @Prop({ require: true, type: AddressSchema })
    address: Address;
    
}

export type UserDocument = Document & User
export const UserSchema = SchemaFactory.createForClass(User)
export const UserModel = 'User'