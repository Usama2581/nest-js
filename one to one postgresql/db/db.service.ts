import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Profile } from "src/entities/profile.entity";
import { User } from "src/entities/user.entity";


@Injectable()
export class DBService implements TypeOrmOptionsFactory {

    constructor(private config: ConfigService) {}
    
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        
        const type =  this.config.get('type')
        const host =  this.config.get('host')
        const port =  this.config.get('port')
        const username =  this.config.get('name')
        const password =  this.config.get('password')
        const synchronize =  this.config.get('synchronize')
        const database =  this.config.get('database')
        const entities = [User, Profile]
        // console.log(type, host, port, username, password, synchronize, database, entities)
        

        return {
            type,
            host,
            port,
            username,
            password,
            database,
            synchronize,
            entities
        }

    }
    
}
