import { MongooseModule } from '@nestjs/mongoose';
import { EmployerController } from './employer.controller';
import { Module } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { UserModel, UserSchema } from 'src/schemas/users.schema';
import { EmployerModel, EmployerSchema } from 'src/schemas/employer.schema';

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: UserModel, schema: UserSchema, discriminators: [
                { name: EmployerModel, schema: EmployerSchema }
            ]
        },

    ])],
    controllers: [EmployerController],
    providers: [EmployerService],
})

export class EmployerModule { };