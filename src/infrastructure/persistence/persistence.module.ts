import { Module } from '@nestjs/common';
import { PostgresModule } from './databases/postgres/postgres.module';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [PostgresModule],
  controllers: [],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class PersistenceModule {}
