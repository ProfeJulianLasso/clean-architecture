import { NestFactory } from '@nestjs/core';
import { SecurityModule } from './infrastructure/persistence/persistence.module';

async function bootstrap() {
  const app = await NestFactory.create(SecurityModule);
  await app.listen(3000);
}
bootstrap();
