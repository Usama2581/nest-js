import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User, UserModel } from "./user.schema";
import { Document, Types } from "mongoose";


@Schema({
    timestamps: true
})

export class Ads {

    @Prop({ required: true, ref: UserModel, type: Types.ObjectId })
    seller: Types.ObjectId | User;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    location: string;

}


export type AdsDocument = Ads & Document
export const AdsSchema = SchemaFactory.createForClass(Ads)
export const AdsModel = 'Ads'