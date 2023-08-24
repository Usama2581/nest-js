import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DBService } from "./db.service";


@Module({
    imports: [TypeOrmModule.forRootAsync({
        useClass: DBService
    })]
})

export class DBModule {}