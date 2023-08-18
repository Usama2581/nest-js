
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config' 

@Module({
  // imports: [UserModule, ConfigModule.forRoot({
  //    envFilePath: ['.env', '.dev.env'], //for multiple env
  //   cache: true,
  //   isGlobal: true
  // })],
  imports: [UserModule, ConfigModule.forRoot({
    isGlobal: true,
    cache: true
  })],
  controllers: [],
  providers: [],
})

export class AppModule {}

// fetch('users/register', {
  //   method: 'POST',
  //   headers: {
  //       'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //       name: 'Iphone',
  //       email: 'iphone@gmail.com',
  //       password: 'ghujiuhju'
  //   })
  // })
  // .then(res => res.json())
  // .then(res => console.log(res))
