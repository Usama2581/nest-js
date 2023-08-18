import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DBService } from "./db.service";

@Module({
    imports: [MongooseModule.forRootAsync({
        useClass: DBService
    })]
})

export class DBModule {}