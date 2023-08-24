import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class DBService implements TypeOrmOptionsFactory{

    constructor(private config: ConfigService) {}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        const type = this.config.get('type')
        const host = this.config.get('host')
        const port = this.config.get('port')
        const username = this.config.get('user')
        const password = this.config.get('password')
        const database = this.config.get('database')
        const synchronize = this.config.get('synchronize')
        const entities = [User]
        // console.log(entities)

        return {
            type,
            host,
            port,
            username,
            password,
            database,
            entities,
            synchronize
        }
    }
    
}