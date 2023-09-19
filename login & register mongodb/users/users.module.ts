import { UserSchema } from './../schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from 'src/schema/user.schema';
import { UsersController  } from './users.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: UserModel, schema: UserSchema }]),
        JwtModule.register({
            secret: 'key',
            // signOptions: {
            //     expiresIn: '20s'
            // }
        }) 
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})

export class UserModule {};