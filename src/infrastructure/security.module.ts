import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { CreateUserApi } from './api/create-user/create-user.api';
import { Configuration } from './configs/configuration.config';
import { CommandExceptionFilter } from './filters/command-exception/command-exception.filter';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Configuration],
      isGlobal: true,
    }),
    PersistenceModule,
  ],
  controllers: [CreateUserApi],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CommandExceptionFilter,
    },
  ],
})
export class SecurityModule {}
