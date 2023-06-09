import { NestFactory } from '@nestjs/core';
import { SecurityModule } from './infrastructure/security.module';

(async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(SecurityModule);
  await app.listen(3000);
})();
