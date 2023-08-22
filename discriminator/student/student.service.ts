import { StudentDocument } from './../schemas/student.schema';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StudentModel } from 'src/schemas/student.schema';


@Injectable()
export class StudentService {
    constructor(@InjectModel(StudentModel) private readonly student: Model<StudentDocument>) {}

    async create (body) {
        return await this.student.create(body)
    }
}