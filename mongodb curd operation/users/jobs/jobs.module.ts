import { MongooseModule } from '@nestjs/mongoose'
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Module } from '@nestjs/common';
import { JobsModel, JobsSchema } from 'src/schemas/jobs.schema';
import { UsersModule } from '../users.module';


@Module({
    imports: [MongooseModule.forFeature([{ name: JobsModel, schema: JobsSchema }]), UsersModule],
    controllers: [JobsController],
    providers: [JobsService],
})
export class JobsModule {};