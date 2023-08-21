import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { JobsModule } from './users/jobs/jobs.module';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    DBModule,
    UsersModule,
    JobsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }

// fetch('users/add', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'ali',
//     email: 'ali@gmail.com',
//     password: '123456', 
// age: 23, 
// gender: 'male', 
// address: {
  //  city: 'karachi',
  // country: 'pakistan',
  // address: '125/17 sector 5d new karachi' }
//   })
// })
//   .then(res => res.json())
//   .then(res => console.log(res))
