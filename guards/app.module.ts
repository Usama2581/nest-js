import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { DBModule } from './db/db.module';
// import { DBModule } from './db/db.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
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

  // nIsewKFaJNlEAZvu
  // usamahafeez948
