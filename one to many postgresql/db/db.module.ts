import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { DBService } from './db.service';
// import { Controller } from './.controller';

@Module({
    // controllers: [Controller],
    imports: [TypeOrmModule.forRootAsync({ useClass: DBService })],
})
export class DBModule {};