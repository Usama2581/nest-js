import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserMiddleware, UserMiddlewares } from './../middleware/users.middleware';


@Module({
    imports: [],
controllers: [UserController],
    providers: []
})

// export class UserModule implements NestModule {

//     configure(consumer: MiddlewareConsumer) {
//         consumer
//             .apply(middleware)
//             .forRoutes('users')
//     }

// }

// export class UserModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer
//         .apply(UserMiddleware)
//         // .forRoutes({ path: 'users/post', method: RequestMethod.POST })
//         .exclude({ path: 'users/get', method: RequestMethod.GET })
//     }
// }

// export class UserModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         // throw new Error("Method not implemented.");
//         consumer.apply(UserMiddlewares).forRoutes('users')
//     }
    
// }

export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(UserMiddlewares)
        .forRoutes('users')
    }
    
}