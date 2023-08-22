import { Document } from 'mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
import { User } from './users.schema';


@Schema()
export class Student extends User {

    @Prop({ require: true })
    qualification: string;

    @Prop({ require: true })
    experience: string;

    @Prop({ require: true })
    grade: number;

}

export const StudentSchema = SchemaFactory.createForClass(Student)
export const StudentModel = 'Student'
export type StudentDocument = Document & Student