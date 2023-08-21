import { UserModel } from 'src/schemas/user.schema';
import { UserDocument } from '../schemas/user.schema';

import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { UserModel } from '../schemas/user.schema';

// import { CreateUserDto } from './dto/create-user.dto';
// import { User } from './interfaces/users.interface';
// import { UserSchema } from './schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(UserModel) private userModel: Model<UserDocument>) {
        console.log(userModel)
    }

    async findAll () {
        const user = await this.userModel.find()
        return user
    }

    async addUser(body) {
        const user = await this.userModel.create(body)
        return user
    }

    async findOneUser(id) {
        // console.log('service', id)
        const user = await this.userModel.findById(id)
        return user
    }

    async updateUser(id, body) {
        const user = await this.userModel.findByIdAndUpdate(id, body, { new: true })
        return user
    }

    async deleteUser(id) {
        const user = await this.userModel.findByIdAndDelete(id)
        return user
    }

    
    
}