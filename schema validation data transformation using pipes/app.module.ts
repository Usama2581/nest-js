//IOC Container-------
// A container where we store the instance of the class which is going to be used as dependency

//Provider
// Any thing which can be injected as dependency 

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
// import { UserModule } from './users/user.module';
// import { UserModule } from './users/user.module';


@Module({
  imports: [UserModule],
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
