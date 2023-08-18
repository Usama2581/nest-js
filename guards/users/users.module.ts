import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";

@Module({
    imports: [],
    providers: [],
    controllers: [UserController]
})

export class UserModule {}