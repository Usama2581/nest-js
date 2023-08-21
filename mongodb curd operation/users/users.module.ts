import { MongooseModule } from '@nestjs/mongoose'
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { UserModel, UserSchema } from 'src/schemas/user.schema';
// import { UsersControllerController } from './.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: UserModel, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})

export class UsersModule {};