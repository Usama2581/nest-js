import { EmployerService } from './employer.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('/employer')

export class EmployerController {

    constructor(private employer: EmployerService){}

    @Post('/add')
    async add(@Body() body) {
        return await this.employer.create(body)
    }
}

