import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { hash } from "bcrypt";
import { Document } from "mongoose";
// import { Schema } from "mongoose";


@Schema()

export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User)
export const UserModel = 'User'
export type UserDocument = User & Document


UserSchema.pre('save', async function(next) {
    const hashedPassword = await hash(this.password, 10)    
    console.log(hashedPassword)
    this.password = hashedPassword
    next()
})




