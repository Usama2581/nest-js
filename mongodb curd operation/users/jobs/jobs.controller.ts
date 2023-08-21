import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('/jobs')

export class JobsController {

    constructor(private jobs: JobsService) { }

    @Post('/post')
    async post(@Body() body) {
        console.log(body)
        const job = await this.jobs.postJob(body)
        return job
    }

    @Get('/get')
    async getJob() {
        return await this.jobs.findAll()
    }

    
    @Get('/:id')
    async getOne(@Param() param) {
        const id = param.id
        return await this.jobs.findOne(id)
    }
}