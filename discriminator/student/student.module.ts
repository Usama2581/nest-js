import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './student.controller';
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { UserModel, UserSchema } from 'src/schemas/users.schema';
import { StudentModel, StudentSchema } from 'src/schemas/student.schema';


@Module({
    imports: [MongooseModule.forFeature([
        {
            name: UserModel, schema: UserSchema, discriminators: [
                { name: StudentModel, schema: StudentSchema }
            ]
        }
    ])],
    controllers: [StudentController],
    providers: [StudentService],
})

export class StudentModule { };