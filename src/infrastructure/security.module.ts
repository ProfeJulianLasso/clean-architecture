import { Module } from '@nestjs/common';
import { CreateUserApi } from './api/create-user.api';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [PersistenceModule],
  controllers: [CreateUserApi],
  providers: [],
})
export class SecurityModule {}
