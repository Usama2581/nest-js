import { Body, Param } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('/student')

export class StudentController {

    constructor(private student: StudentService){}

    @Post('/add')
    async create(@Body() body) {
        return await this.student.create(body)
    }
}