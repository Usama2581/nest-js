import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose/dist/interfaces";


@Injectable()

export class DBService implements MongooseOptionsFactory {

    constructor(private config: ConfigService) {
        // console.log(config)
    }

    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {

        const name = this.config.get('user_name')
        const password = this.config.get('password')
        const uri = `mongodb+srv://${name}:${password}@cluster0.qemcqq5.mongodb.net/?retryWrites=true&w=majority`
        // console.log(uri)
        return {
            uri
        }
    }

}