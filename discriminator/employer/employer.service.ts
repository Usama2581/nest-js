import { EmployerModel, EmployerDocument } from './../schemas/employer.schema';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()

export class EmployerService {

    constructor(@InjectModel(EmployerModel) private readonly employer: Model<EmployerDocument>) {
        console.log(employer)
    }

    async create (body) {
        return await this.employer.create(body)
    }

}