import { ConfigService } from '@nestjs/config';
import { Injectable } from "@nestjs/common";
import { MongooseOptionsFactory } from "@nestjs/mongoose";
import { MongooseModuleOptions } from "@nestjs/mongoose/dist/interfaces";


@Injectable()

export class DBService implements MongooseOptionsFactory {

    constructor(private config: ConfigService) { }
    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
        const name = this.config.get("user_name")
        const pass = this.config.get('password')
        const uri = `mongodb+srv://${name}:${pass}@cluster0.aqpfeza.mongodb.net/?retryWrites=true&w=majority`
        
        return {
            uri
        }
    }

}