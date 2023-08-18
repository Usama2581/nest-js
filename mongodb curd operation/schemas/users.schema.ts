
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Address, AdressSchema } from "./address.schema";
import { Document } from "mongoose";

@Schema()

export class User {
    
    // to use the user class in other schema
    // import User class and User_Model
    // User is the User class used in type whereas ref is providing reference to User collecteion
    // @Prop({ type: Types.ObjectId, ref: User_Model, required: true })
    // employer: Types.ObjectId | User;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    gender: string;

    @Prop({ required: true })
    email: string;

    @Prop({ type: AdressSchema, required: true })
    address: Address;
}

type UserDocument = User & Document
const UserSchema = SchemaFactory.createForClass(User)
const User_Model = 'User'

export {
    UserSchema,
    UserDocument,
    User_Model
}