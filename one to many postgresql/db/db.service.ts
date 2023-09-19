import { Product } from './../entities/product.entity';
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Company } from "src/entities/company.entity";


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
        const entities = [Company, Product]
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
