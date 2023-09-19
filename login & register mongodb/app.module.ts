import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DB_Module } from './db/db.module';
import { UserModule } from './users/users.module';
import { AdsModule } from './ads/ads.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    DB_Module,
    UserModule,
    AdsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
