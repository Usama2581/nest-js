import { DBService } from './db.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: DBService
            // type: 'postgres',
            // host: 'localhost',
            // port: 4000,
            // username: 'postgres',
            // password: '123456',
            // database: 'TestDB',
            // entities: [User],
            // synchronize: true,
            // logging: true
        })
    ],
})


export class DBModule {}