import { MongooseModule } from '@nestjs/mongoose';
import { DBService } from './db.service';
import { Module } from '@nestjs/common';



@Module({
    imports: [MongooseModule.forRootAsync({ useClass: DBService})]
})

export class DBModule {};