import { Module } from "@nestjs/common";
import { UserService } from "./users.services";

@Module({
    imports: [],
    controllers: [],
    providers :[UserService]
})

export class UserModule {}