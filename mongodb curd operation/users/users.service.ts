import { UserSchema, UserDocument } from 'src/schemas/users.schema';
import { BadRequestException, Injectable, NotFoundException, ServiceUnavailableException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()

export class UserService {

    constructor(@InjectModel('user') private userModel: Model<UserDocument>) {
        console.log(userModel)
    }

    async create(body) {
        try {
            const user = await this.userModel.create(body)
            return user
        } catch (error) {
            if (error.name === 'ValidationError') {
                throw new BadRequestException()
            }
            else {
                throw new ServiceUnavailableException()
            }
        }
    }

    async findAll() {
        const user = await this.userModel.find()
        return user
    }

    async findOne(id) {
        console.log(id)
        const user = this.userModel.findById(id)
        if (!user) {
            throw new NotFoundException()
        }
        return user
    }

    async update(id, body) {
        const user = this.userModel.findByIdAndUpdate(id, body ,{ new: true })
        return user
    }

    async delete(id) {
        const user = await this.userModel.findOneAndDelete(id)
        return user
    }


}