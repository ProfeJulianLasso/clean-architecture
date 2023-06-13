import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { PersistenceModule } from '../persistence/persistence.module';
import { ServicesModule } from '../services/services.module';
import { CreateUserController } from './controllers/create-user/create-user.controller';
import { CommandExceptionFilter } from './filters/command-exception/command-exception.filter';

@Module({
  imports: [ServicesModule, PersistenceModule],
  controllers: [CreateUserController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CommandExceptionFilter,
    },
  ],
})
export class ApiModule {}
