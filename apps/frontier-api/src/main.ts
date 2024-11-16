import { NestFactory } from '@nestjs/core';
import { FrontierApiModule } from './frontier-api.module';

async function bootstrap() {
  const app = await NestFactory.create(FrontierApiModule);
  await app.listen(3000);
}
bootstrap();
