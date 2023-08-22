import { Document } from 'mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
import { User } from './users.schema';


@Schema()

export class Employer extends User {

    @Prop({ require: true })
    company: string;

    @Prop({ require: true })
    location: string;

    @Prop({ require: true })
    size: number;

}

export const EmployerSchema = SchemaFactory.createForClass(Employer)
export const EmployerModel = 'Employer'
export type EmployerDocument = Document & Employer