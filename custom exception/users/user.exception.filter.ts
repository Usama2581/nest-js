// import { ExceptionFilter, Catch, HttpException, ArgumentsHost } from "@nestjs/common";
import { Request, Response } from "express";
import { Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { ExceptionFilter } from '@nestjs/common';
import { ArgumentsHost } from '@nestjs/common';



@Catch(HttpException)

export class UserCustomExceptionFilter implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost): any {

        const context = host.switchToHttp()
        const res = context.getResponse<Response>()
        const req = context.getRequest<Request>()
        const status = exception.getStatus()

        const body = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            url: req.url,
            host: req.get('host')
        }
        // res.status(status).json(body: {
        // })
        res.status(status).json(body)
    }
}