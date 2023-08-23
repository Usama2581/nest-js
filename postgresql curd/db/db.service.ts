import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm/dist";
import { User } from "src/user/entities/user.entity";

@Injectable()

export class DBService implements TypeOrmOptionsFactory {

    constructor(private config: ConfigService) {
        // this.config.load()
    }

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {

        const type = this.config.get('type')
        const host = this.config.get('host')
        const port = this.config.get('port')
        const username = this.config.get('namee')
        const password = this.config.get('password')
        const database = this.config.get('database')
        const synchronize = this.config.get('synchronize')
        const logging = this.config.get('logging')
        const entities = [User]
        // console.log('type', type)
        // console.log('host', host)
        // console.log('port', port)
        // console.log('username', username)
        // console.log('password', password)
        // console.log('database', database)
        // console.log('sync', entities)

        return {
            port,
            username,
            password,
            type,
            host,
            database,
            synchronize,
            logging,
            entities
        }
    }

}
