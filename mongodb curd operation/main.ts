import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  // const service = app.get(ConfigService)
  // const port = service.get('port')
  // const service = app.get(ConfigService)
  // const port = service.get('port')
  await app.listen(3000);
  console.log(`Server is running on port 3000`);

}

bootstrap();


// `mongodb+srv://${name}:${pass}@cluster0.aqpfeza.mongodb.net/?retryWrites=true&w=majority`