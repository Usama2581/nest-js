import { Body, Controller, Get, Post, Res, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import * as path from 'path';


@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  // @Post('/upload')
  // @UseInterceptors(FileInterceptor('file', {
  //   storage: diskStorage({
  //     destination: './uploads',
  //     filename: (req, file, cb) => {
  //       cb(null, `${file.originalname}`)
  //     }
  //   })
  // }))
  // async uploadFile() {
  //     return { message: 'file uploaded' }
  // }


  @Post('/post')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
      }
    })
  }))
  async upload() {
    return { message: 'file uploaded' }
  }


  // @Get('/get')
  // async getFile(@Res() res: Response, @Body() body) {
  //   res.sendFile(path.join(__dirname, '../uploads/' + body.filename))
  // }

  @Get('/get')
  async get(@Res() res: Response, @Body() body) {
    res.sendFile(path.join(__dirname, `../uploads/${body.filename}`))
  }
}
