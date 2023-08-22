import { EmployerModule } from './employer/employer.module';

import { DBModule } from './db/db.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './student/student.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DBModule,
    EmployerModule,
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
