import { User, UserModel } from 'src/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from 'mongoose';


@Schema()

export class Jobs  {

    @Prop({ required: true, ref: UserModel, type: Types.ObjectId })
    employer: Types.ObjectId | User;
    
    @Prop({ required: true })
    title: string;
    
    @Prop({ required: true })
    salary: number;
    
    @Prop({ required: true })
    description: string;
    
}

const JobsSchema = SchemaFactory.createForClass(Jobs)
const JobsModel = 'Jobs'
type JobsDocument = Document & Jobs

export {
    JobsSchema,
    JobsDocument,
    JobsModel
}