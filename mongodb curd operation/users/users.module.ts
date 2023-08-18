import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserSchema } from 'src/schemas/users.schema';
import { UserService } from './users.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])],
    providers: [UserService],
    controllers: [UserController]
})

export class UserModule {}