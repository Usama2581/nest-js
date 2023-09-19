import { UserDocument } from './../schema/user.schema';
import { Model } from 'mongoose';
import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './../schema/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(UserModel) private readonly userModel: Model<UserDocument>,
        private jwtService: JwtService
    ) {}

    async register(body) {

        const user = await this.userModel.findOne({ email: body.email })

        if (user) {
            throw new BadRequestException('User already exsist.')
        }
        else {
            const user = await this.userModel.create(body)
            return { message: 'registered' }
        }
    }

    async login(body) {

        const user = await this.userModel.findOne({ email: body.email })

        if (!user) {
            throw new UnauthorizedException('User not found.')
        }

        const result = await bcrypt.compare(body.password, user.password)

        if (!result) {
            throw new BadRequestException('Email or Password is incorrect.')
        }
        else {
            const payload = { sub: user.password, username: user.name }
            const token = await this.jwtService.signAsync(payload)

            return token
        }
    }

    async getUserById(id) {
        console.log(id)
        return await this.userModel.findById(id)
    }

    async getAllUser() {
        return await this.userModel.find()
    }

}