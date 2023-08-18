import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UserService {
    constructor(private service: ConfigService) {
        const port  = this.service.get('port')
        console.log(port)
    }

}