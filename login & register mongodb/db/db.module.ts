
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_Service } from './db.service';
// import { Controller } from './.controller';

@Module({
    imports: [MongooseModule.forRootAsync({
        useClass: DB_Service
    })]
})
export class DB_Module {};