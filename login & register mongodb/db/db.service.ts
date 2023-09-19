import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseOptionsFactory } from '@nestjs/mongoose';
import { MongooseModuleOptions } from '@nestjs/mongoose/dist/interfaces';


@Injectable()

export class DB_Service implements MongooseOptionsFactory {

    constructor(private config: ConfigService) {}

    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
        const name = this.config.get('name')
        const password = this.config.get('password')
        const uri = `mongodb+srv://${name}:${password}@cluster0.qemcqq5.mongodb.net/?retryWrites=true&w=majority`

        return {
            uri 
        }

    }
    
}
