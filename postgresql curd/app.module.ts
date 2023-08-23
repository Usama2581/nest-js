import { DBModule } from './db/db.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: false }),
    DBModule,
    UserModule
    // EmployerModule,
    // StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
