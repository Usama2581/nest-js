import { UsersService } from './../users.service';
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JobsDocument, JobsModel, JobsSchema } from 'src/schemas/jobs.schema';


@Injectable()
export class JobsService {

    constructor(@InjectModel(JobsModel) private readonly jobsModel: Model<JobsDocument>,
        private user: UsersService) {
        console.log(jobsModel)
    }

    async findOne(id) {
       
        return (await this.jobsModel.findById(id)).populate('employer')
    }
    async findAll() {
        return await this.jobsModel.find().populate('employer')
    }


    async postJob(body) {
        
        const user = await this.user.findOneUser(body.userId)
        // console.log(user)
        
        if(!user) {
            throw new NotFoundException('User Not Found')
        }

        const job = await this.jobsModel.create({ ... body, employer: user._id})
        return job
    }
}